import { Router } from "express";
import { ChampionsController } from "../controllers/ChampionsController.controller";

export class ChampionsRoutes {
    public static get routes(): Router {
        const router = Router();
        
        const championsController = new ChampionsController();

        router.get('/', championsController.getChampionsByName);

        return router;
    }
}