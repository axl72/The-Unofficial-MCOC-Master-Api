import { test_champion } from "../information-champion";
import { mockRequest, mockResponse } from 'jest-mock-req-res';
import { ChampionsController } from "../../src/controllers";
import { PrismaClient } from '@prisma/client'

describe('Test Suit in ChampionController', () => {
    test('request should contains expected fields', () => {
        expect(test_champion).toHaveProperty('name');
        expect(test_champion).toHaveProperty('biography');
        expect(test_champion).toHaveProperty('releaseDate');
        expect(test_champion).toHaveProperty('skills');
        expect(test_champion).toHaveProperty('attributes');
        expect(test_champion).toHaveProperty('inmunities');
        expect(test_champion).toHaveProperty('resistences');
        expect(test_champion).toHaveProperty('tags');
        expect(test_champion).toHaveProperty('signatureAbility')
        expect(test_champion).toHaveProperty('specialAttacks');
        expect(test_champion).toHaveProperty('synergies');
        expect(test_champion).toHaveProperty('sprites');
    });

    test('should create a test_champion in database', async () => {
        const req = mockRequest({body: test_champion})
        const res = mockResponse()

        const controller = new ChampionsController();
        await controller.createChampion(req, res)

        expect(res.json).toHaveBeenCalledWith({ message: "Champion created successful" });
    })
})
