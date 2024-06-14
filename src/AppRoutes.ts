import { Router } from "express";
import { ChampionsRoutes } from "./Routes/ChampionsRoutes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/champions', ChampionsRoutes.routes)

        return router;
    }
}