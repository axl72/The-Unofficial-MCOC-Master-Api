import { Request, Response } from "express";

export class ChampionsController {
    public getChampionsByName = (req:Request, res:Response) => {
        const championInformation = {
            name: "Hercules",
            biography: "Born in Ancient Greece, Hercules is a demigod born to Zeus - The king of Olympic Gods - and Alcmena, a woman of  Thebes. As an infant. Hercules was cared for by his stepmother Hera. Queen of the Olumpian Gods, and bestowed with her blessings These blessings further elevated his demigod physiology to near Godlike heights, providing him with inmmense strength, stamina, immortality, and near invulnerability",
            release_date: "15-07-2021",
            skills: [{
                title: "Always active",
                description: ["Blessings bestowed", "A strong resilence to conventional"]
            }],
            atribuites: {
                details:{
                    HP: 65235,
                    potency: 30285,
                    force: 6291,
                    adrenalina: 0.3,
                },
                critical_raiting: 237,
                critical_damage_raiting: 0,
                armor_penetration: 3,
                block_penetration: 119,
                critical_resistence: 4,
                armor_raiting: 654,
                block_proficiency: 0,
                energy_resistence: 250
            },
            inmunities: [],
            resistences: [{
                effect: "poison",
                ratio: 0.15
            },{
                effect: "bleed",
                ratio: 0.5
            }],
            tags: {
                "combat style": [],
                "attributes": [],
                "organization": null,
                "alliance wars": [],
                "carina's challenges": null,
                "alliance quest": null,
                "release date": 2021,
                "saga": null
            },
            signature_ability: {
                name: "Son of Zeus",
                description: ""
            },
            special_attacks: {

            },
            synergies: [{
                name: "Masterful combat",
                active_champions: ["Black Phanter"],
                bonuses: {

                }
            }],
            sprites: ['https://static.wikia.nocookie.net/marvel-contestofchampions/images/0/06/Hercules_portrait.png/revision/latest?cb=20210710214126']
        }
        res.json(championInformation)

    } 
}