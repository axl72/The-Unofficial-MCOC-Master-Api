import { Router } from "express";
import { ChampionsController } from "../controllers";
import { AuthMiddleware } from "../middlewares";

export class ChampionsRoutes {
    public static get routes(): Router {
        const router = Router();
        
        const championsController = new ChampionsController();

        router.get('/:championName', championsController.getChampionsByName);
        router.post('/create',[AuthMiddleware.validateJWT], championsController.createChampion);
        router.put('/update/:championName', championsController.updateChampion)
        router.delete('/delete', [AuthMiddleware.validateJWT], championsController.deleteChammpionByName)

        return router;
    }
}