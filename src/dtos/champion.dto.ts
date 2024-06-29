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

  static createFromObjectDatabase = (object: {[key: string]: any}) => {
     const {
      name,
      biography,
      abilities,
      attributes,
      inmunities,
      releaseDate,
      resistences,
      signatureAbility,
      specialAttacks,
      sprites,
      synergies,
      tags,
    } = object ?? {};
    const { id, championId, details, ...attributesResult } = attributes ?? {};
    const { id: detailsId, ...moreDetails } = details ?? {};

    const championResult = {
      name,
      biography,
      releaseDate,
      attributes: {
        ...attributesResult,
        details: { ...moreDetails },
      },
      inmunities: inmunities?.map((inmunity:any) => inmunity),
      resistences: resistences?.map(({ inmunity_asociated, ratio }: any) => ({
        inmunity_asociated,
        ratio,
      })),
      signatureAbility: {
        name: signatureAbility?.name,
        type: signatureAbility?.type,
        bonuses: signatureAbility?.bonuses.map(
          ({ description}:any) => description
        ),
      },
      specialAttacks: specialAttacks?.map(({ name, description, bonuses }:any) => ({
        name,
        description,
        bonuses: bonuses.map(({ description }:any) => description),
      })),
      synergies: synergies?.map(({ name, champions, bonuses }:any) => ({
        name,
        bonuses: bonuses.map(({ description }:any) => description),
        champions: champions.map(({ name }:any) => ({
          name,
        })),
      })),
      tags: {
        releaseDate: tags?.releaseDate,
        allianceQuest: tags?.allianceQuest.map(
          ({ description }:any) => description
        ),
        allianceWars: tags?.allianceWars.map(({ description }:any) => description),
        attributes: tags?.attributes.map(({ description }:any) => description),
        carinasChallenges: tags?.carinasChallenges.map(
          ({ description }:any) => description
        ),
        combatStyle: tags?.combatStyle.map(({ description }:any) => description),
        organization: tags?.organization.map(({ description }:any) => description),
        saga: tags?.saga,
      },

      sprites: sprites?.map(({ source, url }:any) => ({
        source,
        url,
      })),
      abilities: abilities?.map(({ title, characteristics }:any) => ({
        title,
        characteristics: characteristics.map(({ description }:any) => description),
      })),
    };

    return new ChampionDTO(championResult);
  }
}
