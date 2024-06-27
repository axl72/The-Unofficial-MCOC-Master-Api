interface Abilities {
  title: string;
  characteristics: string[];
}

interface Tags {
  allianceQuest: string[];
  allianceWars: string[];
  attributes: string[];
  carinasChallenges: string[];
  combatStyle: string[];
  organization: string[];
  releaseDate: string;
  saga: string;
}

interface SignatureAbility {
  name: string;
  type: string;
  bonuses: string[];
}

interface SpecialAttack {
  description: string;
  bonuses: string[];
}

interface Synergie {
  name: string;
  champions: [{ name: string; bonuses: string[] }];
  bonuses: string[];
}

interface Attributes {
  armorPenetration: number;
  armorRaiting: number;
  blockPenetration: number;
  blockProficiency: number;
  criticalDamageRaiting: number;
  criticalRaiting: number;
  criticalResistence: number;
  energyResistence: number;
  details: {
    adrenaline: number;
    hp: number;
    potency: number;
    force: number;
  };
}

export interface Champion {
  name: string;
  biography: string;
  releaseDate: Date;
  abilities: Abilities[];
  attributes: Attributes;
  inmunities: string[];
  resistences: [{ inmunityAsocieated: string; ratio: number }];
  tags: Tags;
  signatureAbility: SignatureAbility;
  specialAttacks: SpecialAttack[];
  synergies: Synergie[];
  sprites: [{ source: string; url: string }];
}
