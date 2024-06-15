import { Router } from "express";
import { LoginController } from "../controllers/LoginController";

export class LoginRoutes {
    public static get routes(): Router {
        const router = Router();
        
        const controller = new LoginController();

        router.get('/', controller.sendToken);

        return router;


    }
}