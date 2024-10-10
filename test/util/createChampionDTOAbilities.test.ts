import { createChampionDTOAbilities } from "../../src/util";

describe("test suit to test createChampionDTOAbilitiesFunction", () => {
  const abilities = [
    {
      title: "Always active",
      characteristics: [
        "Blessings bestowed from the Goddess Hera protect against physical injury, reducing the potency of incoming Bleed effects by 50%.",
        "A strong resilience to conventional drugs and toxins reduces the potency of incoming Poison effects by 15% and makes the recovery reduction from Poison 20% less effective.",
      ],
    },
    {
      title: "Feats of Strength - Passive - Max Stacks 12",
      characteristics: [
        "Feats: 1. Strike a non-stunned Opponent with any hit of a Heavy Attack. 2. Intercept a dashing Opponent with any attack. 3. Stand up after being knocked down.",
        "Completing a feat grants 1 indefinite Strength, each increasing Armor Penetration by X and causing all attacks to deal a burst of Physical Damage equal to 10% of the damage they dealt.",
        "The first time each unique feat is completed in a fight, gain +1 Persistent Strength for the rest of the quest, allowing Hercules to start each fight with Strength equal to his Persistent Strength.",
        "For 2 second(s) after completing a feat, Hercules gains +X Attack Rating and +50% Buff duration. If a Special Attack is activated during this time, the bonus remains throughout the Special Attack.",
        "While Hercules has Strength he becomes Stun Immune. Each Stun prevented by this immunity removes 1 Strength.",
      ],
    },
    {
      title:
        "Dashing back after landing the first Light or Medium hit in a Combo",
      characteristics: [
        "Inflict a non-stacking Infuriate Debuff for 7 seconds, making the Opponent more aggressive and reducing their Offensive Ability Accuracy by 60%. Cooldown 10 seconds.",
        "While fighting as a Defender the duration of Infuriate is increased to 10 seconds and it is triggered whenever Hercules dashes back.",
      ],
    },
  ];

  test("should return a non-null", () => {
    const result = expect(createChampionDTOAbilities(abilities)).toBeTruthy();
  });

  test("should return a instance of json", () => {
    const result = expect(createChampionDTOAbilities(abilities)).toEqual(expect.any(Object))
  })
});
