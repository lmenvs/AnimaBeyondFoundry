import { Templates } from './constants';

export const preloadTemplates = () => {
  const templatePaths = [
    // Add paths to "systems/AnimaBeyondFoundry/templates"
    Templates.Dialog.ModDialog,
    Templates.Dialog.Icons.Accept,

    // Actor sheet parts
    'systems/animabf/templates/parts/header/header.hbs',
    'systems/animabf/templates/parts/header/parts/top.hbs',
    'systems/animabf/templates/parts/header/parts/actor-image.hbs',
    'systems/animabf/templates/parts/header/parts/armor.hbs',
    'systems/animabf/templates/parts/header/parts/common-resources.hbs',
    'systems/animabf/templates/parts/header/parts/modifiers.hbs',
    'systems/animabf/templates/parts/header/parts/primary-characteristics.hbs',
    'systems/animabf/templates/parts/header/parts/resistances.hbs',
    'systems/animabf/templates/parts/common/horizontal-titled-input.hbs',
    'systems/animabf/templates/parts/common/vertical-titled-input.hbs',
    'systems/animabf/templates/parts/common/group.hbs',
    'systems/animabf/templates/parts/common/group-header.hbs',
    'systems/animabf/templates/parts/common/group-header-title.hbs',
    'systems/animabf/templates/parts/common/group-body.hbs',
    'systems/animabf/templates/parts/common/group-footer.hbs',
    'systems/animabf/templates/parts/common/add-item-button.hbs',
    'systems/animabf/templates/parts/general/general.hbs',
    'systems/animabf/templates/parts/general/parts/level.hbs',
    'systems/animabf/templates/parts/general/parts/language.hbs',
    'systems/animabf/templates/parts/general/parts/elan.hbs',
    'systems/animabf/templates/parts/general/parts/titles.hbs',
    'systems/animabf/templates/parts/general/parts/experience.hbs',
    'systems/animabf/templates/parts/general/parts/advantages.hbs',
    'systems/animabf/templates/parts/general/parts/disadvantages.hbs',
    'systems/animabf/templates/parts/general/parts/aspect.hbs',
    'systems/animabf/templates/parts/general/parts/description.hbs',
    'systems/animabf/templates/parts/general/parts/contacts.hbs',
    'systems/animabf/templates/parts/general/parts/notes.hbs',
    'systems/animabf/templates/parts/combat/combat.hbs',
    'systems/animabf/templates/parts/combat/parts/base-values.hbs',
    'systems/animabf/templates/parts/combat/parts/combat-special-skills.hbs',
    'systems/animabf/templates/parts/combat/parts/combat-tables.hbs',
    'systems/animabf/templates/parts/combat/parts/ammo.hbs',
    'systems/animabf/templates/parts/combat/parts/weapons.hbs',
    'systems/animabf/templates/parts/mystic/mystic.hbs',
    'systems/animabf/templates/parts/mystic/parts/act.hbs',
    'systems/animabf/templates/parts/mystic/parts/magic-projection.hbs',
    'systems/animabf/templates/parts/mystic/parts/zeon-regeneration.hbs',
    'systems/animabf/templates/parts/mystic/parts/innate-magic.hbs',
    'systems/animabf/templates/parts/mystic/parts/zeon.hbs',
    'systems/animabf/templates/parts/mystic/parts/summoning.hbs',
    'systems/animabf/templates/parts/mystic/parts/spheres.hbs',
    'systems/animabf/templates/parts/mystic/parts/free-access-spells.hbs',
    'systems/animabf/templates/parts/mystic/parts/spell-maintenances.hbs',
    'systems/animabf/templates/parts/mystic/parts/selected-spells.hbs',
    'systems/animabf/templates/parts/mystic/parts/summons.hbs',
    'systems/animabf/templates/parts/mystic/parts/metamagics.hbs',
    'systems/animabf/templates/parts/domine/domine.hbs',
    'systems/animabf/templates/parts/domine/parts/ki-skills.hbs',
    'systems/animabf/templates/parts/domine/parts/nemesis-skills.hbs',
    'systems/animabf/templates/parts/domine/parts/ars-magnus.hbs',
    'systems/animabf/templates/parts/domine/parts/martial-arts.hbs',
    'systems/animabf/templates/parts/domine/parts/creatures.hbs',
    'systems/animabf/templates/parts/domine/parts/special-skills-tables.hbs',
    'systems/animabf/templates/parts/domine/parts/ki-accumulation.hbs',
    'systems/animabf/templates/parts/domine/parts/martial-knowledge.hbs',
    'systems/animabf/templates/parts/domine/parts/seals.hbs',
    'systems/animabf/templates/parts/domine/parts/techniques.hbs',
    'systems/animabf/templates/parts/psychic/psychic.hbs',
    'systems/animabf/templates/parts/psychic/parts/psychic-potential.hbs',
    'systems/animabf/templates/parts/psychic/parts/psychic-projection.hbs',
    'systems/animabf/templates/parts/psychic/parts/mental-patterns.hbs',
    'systems/animabf/templates/parts/psychic/parts/innate-psychic-powers.hbs',
    'systems/animabf/templates/parts/psychic/parts/psychic-points.hbs',
    'systems/animabf/templates/parts/psychic/parts/psychic-disciplines.hbs',
    'systems/animabf/templates/parts/psychic/parts/psychic-powers.hbs',
    'systems/animabf/templates/parts/secondaries.html'
  ];

  return loadTemplates(templatePaths);
};
