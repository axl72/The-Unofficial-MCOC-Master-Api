import { Request, Response } from "express"
import { JwToken } from "../services/jwtoken.service"

export class LoginController {
    public sendToken = (req: Request, res: Response) => {
        const payload = req.body;
        JwToken.generateToken(payload).then((token) => {
            res.json(token);
        })
    }
}