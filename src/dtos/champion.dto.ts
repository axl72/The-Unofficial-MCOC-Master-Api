interface ChampionData {
  name: string;
  biography: string;
  releaseDate: Date;
  abilities: any;
  attributes: any;
  inmunities: any;
  resistences: any;
  tags: any;
  signatureAbility: any;
  specialAttacks: any;
  synergies: any;
  sprites: any;
}

export class ChampionDTO {
  private dataChampion: ChampionData;

  constructor(data: ChampionData) {
    this.dataChampion = data;
  }

  get data() {
    return this.dataChampion;
  }


  static createFromObjectRequest = (object: { [key: string]: any }) => {
    const {
      name,
      biography,
      releaseDate,
      abilities,
      attributes,
      inmunities,
      resistences,
      tags,
      signatureAbility,
      specialAttacks,
      synergies,
      sprites,
    } = object;

    return new ChampionDTO({
      name,
      biography,
      releaseDate,
      abilities,
      attributes,
      inmunities,
      resistences,
      tags,
      signatureAbility,
      specialAttacks,
      synergies,
      sprites
    })
  };
}
