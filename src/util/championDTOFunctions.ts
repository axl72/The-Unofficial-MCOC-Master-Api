export const createChampionDTOAbilities = (abilities: any) => {
  return {
    create: abilities.map((ability: any) => ({
      title: ability.title,
      characteristics: {
        create: ability.characteristics.map((characteristic: any) => ({
          description: characteristic,
        })),
      },
    })),
  };
};

export const createChampionDTOAttributes = (attributes: any) => {
  ({
    create: {
      armor_penetration: attributes.armor_penetration,
      armor_raiting: attributes.armor_raiting,
      block_penetration: attributes.block_penetration,
      block_proficiency: attributes.block_proficiency,
      critical_damage_raiting: attributes.critical_damage_raiting,
      critical_raiting: attributes.critical_raiting,
      critical_resistence: attributes.critical_resistence,
      energy_resistence: attributes.energy_resistence,
      details: {
        create: attributes.details,
      },
    },
  });
};
