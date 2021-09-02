/* eslint-disable class-methods-use-this */
import { nanoid } from '../../vendor/nanoid/nanoid';
import { ABFItems } from '../items/ABFItems';
import { ALL_ITEM_CONFIGURATIONS } from './utils/prepareItems/constants';
import { getUpdateObjectFromPath } from './utils/prepareItems/util/getUpdateObjectFromPath';
import { getFieldValueFromPath } from './utils/prepareItems/util/getFieldValueFromPath';
import { prepareActor } from './utils/prepareActor/prepareActor';

export class ABFActor extends Actor {
  i18n: Localization;

  constructor(
    data: ConstructorParameters<typeof foundry.documents.BaseActor>[0],
    context: ConstructorParameters<typeof foundry.documents.BaseActor>[1]
  ) {
    super(data, context);

    this.i18n = (game as Game).i18n;
  }

  prepareDerivedData() {
    super.prepareDerivedData();

    prepareActor(this);
  }

  public async createItem({ type, name, data = {} }: { type: ABFItems; name: string; data?: unknown }) {
    await this.createEmbeddedDocuments('Item', [{ type, name, data }]);
  }

  public async createInnerItem({ type, name, data = {} }: { type: ABFItems; name: string; data?: unknown }) {
    const configuration = ALL_ITEM_CONFIGURATIONS[type];

    const items = getFieldValueFromPath<any[]>(this.data.data, configuration.fieldPath) ?? [];

    await this.update({
      data: getUpdateObjectFromPath([...items, { _id: nanoid(), type, name, data }], configuration.fieldPath)
    });
  }

  public async updateItem({ id, name, data = {} }: { id: string; name?: string; data?: unknown }) {
    const item = this.getItem(id);

    if (item) {
      let updateObject: Record<string, unknown> = { data };

      if (name) {
        updateObject = { ...updateObject, name };
      }

      if ((!!name && name !== item.name) || JSON.stringify(data) !== JSON.stringify(item.data.data)) {
        await item.update(updateObject);
      }
    }
  }

  public async updateInnerItem({
    type,
    id,
    name,
    data = {}
  }: {
    type: ABFItems;
    id: string;
    name?: string;
    data?: unknown;
  }) {
    const configuration = ALL_ITEM_CONFIGURATIONS[type];

    const items = getFieldValueFromPath<any[]>(this.data.data, configuration.fieldPath);

    const item = items.find(it => it._id === id);

    if (item) {
      const hasChanges = (!!name && name !== item.name) || JSON.stringify(data) !== JSON.stringify(item.data);

      if (hasChanges) {
        if (name) {
          item.name = name;
        }

        if (data) {
          item.data = data;
        }

        await this.update({
          data: getUpdateObjectFromPath(items, configuration.fieldPath)
        });
      }
    }
  }

  private getItem(itemId: string) {
    return this.getEmbeddedDocument('Item', itemId);
  }

  getInnerItem(type: ABFItems, itemId: string) {
    const configuration = ALL_ITEM_CONFIGURATIONS[type];

    return getFieldValueFromPath<any>(this.data.data, configuration.fieldPath).find(item => item._id === itemId);
  }
}
