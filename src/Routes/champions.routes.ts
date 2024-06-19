import { Router } from "express";
import { ChampionsController } from "../controllers/champions.controller";

export class Champions {
    public static get routes(): Router {
        const router = Router();
        
        const championsController = new ChampionsController();

        router.get('/', championsController.getChampionsByName);
        router.post('/create', championsController.createChampion);
        router.put('/update', championsController.updateChampion)
        router.delete('/delete', championsController.deleteChammpionByName)

        return router;
    }
}