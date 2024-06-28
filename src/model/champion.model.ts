import { Champion as ChampionInterface } from "../interfaces/champion.interface";
import { Prisma, PrismaClient } from "@prisma/client";
import{ ChampionDTO } from '../dtos'

const prisma = new PrismaClient();

export class Champion {
  public static create = async (object: { [key: string]: any }) => {
    const champion = ChampionDTO.createFromObjectRequest(object)
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
    } = champion.data;


    await prisma.champion.create({
      data: {
        name: name,
        biography: biography,
        releaseDate: new Date(releaseDate),
        abilities: {
          create: abilities.map((ability: any) => ({
            title: ability.title,
            characteristics: {
              create: ability.characteristics.map((characteristic: any) => ({
                description: characteristic,
              })),
            },
          })),
        },
        attributes: {
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
        },
        inmunities: {
          create: inmunities.create,
        },
        resistences: {
          create: resistences,
        },
        tags: {
          create: {
            releaseDate: tags.releaseDate,
            saga: tags.saga,
            allianceQuest: {
              create: tags.allianceQuest.map((tag: any) => ({
                description: tag,
              })),
            },
            allianceWars: {
              create: tags.allianceWars.map((tag: any) => ({
                description: tag,
              })),
            },
            attributes: {
              create: tags.attributes.map((tag: any) => ({
                description: tag,
              })),
            },
            carinasChallenges: {
              create: tags.carinasChallenges.map((tag: any) => ({
                description: tag,
              })),
            },
            combatStyle: {
              create: tags.combatStyle.map((tag: any) => ({
                description: tag,
              })),
            },
          },
        },
        signatureAbility: {
          create: {
            name: signatureAbility.name,
            type: signatureAbility.type,
            bonuses: {
              create: signatureAbility.bonuses.map((bonus: string) => ({
                description: bonus,
              })),
            },
          },
        },
        specialAttacks: {
          create: specialAttacks.map((specialAttack: any) => ({
            name: specialAttack.name,
            description: specialAttack.description,
          })),
        },
        sprites: {
          create: sprites,
        },
        synergies: {
          create: synergies.map((synergy: any) => ({
            name: synergy.name,
            champions: {
              create: synergy.champions.map((champion: any) => ({
                name: champion.name,
                bonuses: {
                  create: champion.bonuses.map((bonus: String) => ({
                    description: bonus,
                  })),
                },
              })),
            },
            bonuses: {
              create: synergy.bonuses,
            },
          })),
        },
      },
    });
  };

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
    } = champion ?? {};
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
      inmunities: inmunities?.map((inmunity) => inmunity),
      resistences: resistences?.map(({ inmunity_asociated, ratio }) => ({
        inmunity_asociated,
        ratio,
      })),
      signatureAbility: {
        name: signatureAbility?.name,
        type: signatureAbility?.type,
        bonuses: signatureAbility?.bonuses.map(
          ({ description }) => description
        ),
      },
      specialAttacks: specialAttacks?.map(({ name, description, bonuses }) => ({
        name,
        description,
        bonuses: bonuses.map(({ description }) => description),
      })),
      synergies: synergies?.map(({ name, champions, bonuses }) => ({
        name,
        bonuses: bonuses.map(({ description }) => description),
        champions: champions.map(({ name }) => ({
          name,
        })),
      })),
      tags: {
        releaseDate: tags?.releaseDate,
        allianceQuest: tags?.allianceQuest.map(
          ({ description }) => description
        ),
        allianceWars: tags?.allianceWars.map(({ description }) => description),
        attributes: tags?.attributes.map(({ description }) => description),
        carinasChallenges: tags?.carinasChallenges.map(
          ({ description }) => description
        ),
        combatStyle: tags?.combatStyle.map(({ description }) => description),
        organization: tags?.organization.map(({ description }) => description),
        saga: tags?.saga,
      },

      sprites: sprites?.map(({ source, url }) => ({
        source,
        url,
      })),
      abilities: abilities?.map(({ title, characteristics }) => ({
        title,
        characteristics: characteristics.map(({ description }) => description),
      })),
    };

    return championResult;
  };
}
