import { Champion as ChampionInterface } from "../interfaces/champion.interface";
import { Prisma, PrismaClient } from "@prisma/client";
import{ ChampionDTO } from '../dtos'

const prisma = new PrismaClient();

export class Champion {
  public static create = async (object: { [key: string]: any }) => {
    const { name } = object
    if ( await this.findChampionByName(name)) throw new Error('champion already created')
    const champion = ChampionDTO.createChampionFromObject(object)
    
    await prisma.champion.create(champion);
    return champion
  };

  public static updateChampionByName = async (championName: string, objectj: {[key: string]: any}) => {
    const championData = await ChampionDTO.createFromObjectRequestNotNull(objectj)
    console.log(championData)
    await prisma.champion.update({
      where: {
        name: championName
      },
      data: {
        ...championData
      }
    })
  }

  public static findChampionByName = async (championName: string) => {
    const champion = await prisma.champion.findUnique({
      where: {
        name: championName,
      },
      include: {
        abilities: { include: { characteristics: true } },
        attributes: {
          include: { details: true },
        },
        inmunities: true,
        resistences: true,
        signatureAbility: {
          include: { bonuses: true },
        },
        specialAttacks: { include: { bonuses: true } },
        sprites: true,
        synergies: {
          include: { bonuses: true, champions: true },
        },
        tags: {
          include: {
            allianceQuest: true,
            allianceWars: true,
            attributes: true,
            carinasChallenges: true,
            combatStyle: true,
            organization: true,
          },
        },
      },
    });

    if(!champion) return null

    return ChampionDTO.createFromObjectDatabase(champion);
  };
}
