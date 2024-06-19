import { Router } from "express";
import { RegisterController } from "../controllers"

export class RegisterRoutes {
    public static get routes():Router {
        const router = Router();
        const controller = new RegisterController();
        router.post('/', controller.register)
        router.post('/validate-email/:token', controller.validateEmail)

        return router;
    }

}