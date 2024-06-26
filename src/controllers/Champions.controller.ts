import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Champion {
  name: string;
}

interface Bonus {
  description: string;
}

interface Synergy {
  name: string;
  champions: Champion[];
  bonuses: Bonus[];
}

export class ChampionsController {
  public getChampionsByName = async (req: Request, res: Response) => {
    const { name } = req.body;
    try {
      const champion = await prisma.champion.findFirst({
        where: {
          name: name,
        },
        include: {
          abilities: {
            select: {
              title: true,
              characteristics: true,
            },
          },
          attributes: {
            select: {
              armor_penetration: true,
              armor_raiting: true,
              block_penetration: true,
              block_proficiency: true,
              critical_damage_raiting: true,
              critical_raiting: true,
              critical_resistence: true,
              energy_resistence: true,
              details: true,
            },
          },
          inmunities: {
            select: {
              name: true,
            },
          },
          resistences: {
            select: {
              inmunity_asociated: true,
              ratio: true,
            },
          },
          tags: {
            select: {
              allianceQuest: true,
              allianceWars: true,
              attributes: true,
              carinasChallenges: true,
              combatStyle: true,
              organization: true,
              releaseDate: true,
              saga: true,
            },
          },
          signatureAbility: {
            select: {
              name: true,
              type: true,
              bonuses: true,
            },
          },
          specialAttacks: true,
          synergies: {
            include: {
              champions: true,
              bonuses: true,
            },
          },
          sprites: true,
        },
      });
      res.json(champion);
    } catch (error) {}
  };

  public createChampion = async (req: Request, res: Response) => {
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
    } = req.body;
    console.log(synergies[0].champions);
    try {
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
                    create: champion.bonuses.map((bonus: String) => (
                      {
                        description: bonus
                      }
                    ))
                      
                    
                  }
                })),
              },
              bonuses: {
                create: synergy.bonuses,
              },
            })),
          },
        },
      });
      res.json({ message: "Champion created successful" });
    } catch (error) {
      console.log(error);
      res.json({ message: error });
    }
  };

  public updateChampion = async (req: Request, res: Response) => {
    throw new Error("Method updateChampion is not implemented");
  };

  public deleteChammpionByName = async (req: Request, res: Response) => {
    const { name } = req.body;
    try {
      await prisma.champion.delete({
        where: { name: name },
      });
      res.json({ message: "Champion deleted succesful" });
    } catch (error) {
      console.log(error);
      res.json({ message: "Error on deleted" });
    }
  };
}
