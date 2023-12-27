/** @typedef {import('./Migration').Migration} Migration

/** @type Migration */
export const Migration4PsychicDisciplines = {
  version: 4,
  title: 'disciplinas psiquicas',
  description: `Disciplinas psiquicas`,
  async updateActor(actor) {
    // si el act alternativo no es 0, lo migramos
    if (actor.system.mystic.act.alternative.base.value !== 0) {
      const results = await openComplexInputDialog(actor, 'newActVia');
      const name = results['new.actVia.name'];

      await actor.createInnerItem({
        name,
        type: ABFItems.ACT_VIA,
        system: INITIAL_ACT_VIA_DATA
      });
      await actor.createInnerItem({
        name,
        type: ABFItems.INNATE_MAGIC_VIA,
        system: INITIAL_INNATE_MAGIC_VIA_DATA
      });
    }

    // si el act alternativo es 0, no hacemos nada
    return actor;
  }
};
