export const test_champion = {
    name: "Hercules",
    biography: "Born in Ancient Greece, Hercules is a demigod born to Zeus - The king of Olympic Gods - and Alcmena, a woman of Thebes. As an infant. Hercules was cared for by his stepmother Hera. Queen of the Olumpian Gods, and bestowed with her blessings These blessings further elevated his demigod physiology to near Godlike heights, providing him with immense strength, stamina, immortality, and near invulnerability",
    releaseDate: new Date("2021-07-15T00:00:00.000Z"),
    skills: {
        create: [
            {
                title: "Always active",
                description: "This is a description"
            }
        ]
    },
    attributes: {
        create: {
            details: {
                create: {
                    hp: "65235",
                    potency: 30285,
                    force: 6291,
                    adrenaline: 0.3
                }
            },
            critical_raiting: 237,
            critical_damage_raiting: 0,
            armor_penetration: 3,
            block_penetration: 119,
            critical_resistence: 4,
            armor_raiting: 654,
            block_proficiency: 0,
            energy_resistence: 250
        }
    },
    inmunities: {
        create: []
    },
    resistences: {
        create: [
            {
                inmunity_asociated: "poison",
                description: "0.15"
            }
        ]
    },
    tags: {
        create: [
            {
                name: "2021"
            }
        ]
    },
    signatureAbility: {
        create: {
            name: "Son of Zeus",
            description: ""
        }
    },
    specialAttacks: {
        create: [
            {
                name: "Hola",
                description: "esto es un hola"
            }
        ]
    },
    
    sprites: {
        create: [
            {
                source: "Marvel Contest of Champions Wiki",
                url: "https://static.wikia.nocookie.net/marvel-contestofchampions/images/0/06/Hercules_portrait.png/revision/latest?cb=20210710214126"
            }
        ]
    },

    synergies: {
        create: [
            {
                name: "Maserful combat",
                champions: {
                    create: [
                        {name: "Black Panther"}
                    ]
                },
                bonuses: {
                    create: [
                        {description: "some bonus"}
                    ]
                }
            }

        ]
    }
}