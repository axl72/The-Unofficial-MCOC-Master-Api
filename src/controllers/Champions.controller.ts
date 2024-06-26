import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

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
    public getChampionsByName = async(req:Request, res:Response) => {
        const {name} = req.body
        try{

            const champion = await prisma.champion.findFirst(
                {
                    where: {
                        name: name       
                    },
                    include: {
                        skills: {
                            select: {
                                title: true,
                                description: true
                            }
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
                                details: true
                                
                            }
                        }
                        ,
                        inmunities: {
                            select: {
                                name: true
                            }
                        },
                        resistences: {
                            select: {
                                inmunity_asociated: true,
                                description: true
                            }
                        },
                        tags: {
                            select: {
                                name: true
                            }
                        },
                        signatureAbility: {
                            select: {
                                name: true,
                                description: true
                            }
                        },
                        specialAttacks: true,
                        synergies: {
                            include: {
                                champions: true,
                                bonuses: true
                            }
                        },
                        sprites: true
                    }
                }
            )
            res.json(champion)

        }catch(error){

        }
    } 

    public createChampion = async(req:Request, res:Response) => {
        const {name, biography, releaseDate, skills, attributes, inmunities, resistences, tags, signatureAbility, specialAttacks, synergies, sprites} = req.body
        console.log(synergies.name)
        try{
            await prisma.champion.create({data: {
                name: name,
                biography: biography,
                releaseDate: new Date(releaseDate),
                skills: {
                    create: skills
                },
                attributes: {
                    create: attributes
                },
                inmunities: {
                    create: inmunities.create
                },
                resistences: {
                    create: resistences
                },
                tags: {
                    create: tags
                },
                signatureAbility: {
                    create: signatureAbility
                },
                specialAttacks: {
                    create: specialAttacks
                },
                sprites: {
                    create: sprites
                },
                synergies: {
                    create: synergies.map((synergy: Synergy) => ({
                        name: synergy.name,
                        champions: {
                            create: synergy.champions
                        },
                        bonuses: {
                            create: synergy.bonuses
                        }
                    }))
                }


            }});
            res.json({message: "Champion created successful"})

        }catch(error){
            console.log(error)
            res.json({message: error})
        }
    
    }

    public updateChampion = async(req:Request, res:Response) => {
        throw new Error("Method updateChampion is not implemented")
    }

    public deleteChammpionByName = async(req:Request, res:Response) => {
        const {name} = req.body
        try{
            await prisma.champion.delete({
                where: {name: name}
            })
            res.json({message: "Champion deleted succesful"})
        }catch(error){
            console.log(error)
            res.json({message: "Error on deleted"})
        }
    }
}