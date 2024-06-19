import { Router } from "express";
import 'dotenv/config'
import { Champions, Login, Register } from './routes'

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/champions', Champions.routes)
        router.use('/login', Login.routes)
        router.use('/register', Register.routes)

        return router;
    }
}