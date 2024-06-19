import { Router } from "express";
import { LoginController } from "../controllers/login.controller";

export class Login {
    public static get routes(): Router {
        const router = Router();
        
        const controller = new LoginController();

        router.get('/', controller.sendToken);

        return router;


    }
}