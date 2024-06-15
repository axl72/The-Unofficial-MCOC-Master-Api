import { Router } from "express";
import { ChampionsRoutes } from "./routes/ChampionsRoutes";
import 'dotenv/config'
import { LoginRoutes } from "./routes/LoginRoutes";
import { RegisterRoutes } from "./routes/RegisterRoutes"

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/champions', ChampionsRoutes.routes)
        router.use('/login', LoginRoutes.routes)
        router.use('/register', RegisterRoutes.routes)

        return router;
    }
}