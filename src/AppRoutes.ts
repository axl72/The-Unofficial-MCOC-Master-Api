import { Router } from "express";
import 'dotenv/config'
import { ChampionsRoutes, LoginRoutes, RegisterRoutes } from './routes'

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/champions', ChampionsRoutes.routes)
        router.use('/login', LoginRoutes.routes)
        router.use('/register', RegisterRoutes.routes)

        return router;
    }
}