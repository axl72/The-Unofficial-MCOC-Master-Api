import { Request, Response } from "express";
import { JwToken } from "../services/jwtoken.service";

export class LoginController {
  public sendToken = (req: Request, res: Response) => {
    const { user, password } = req.body;
    if (user === "axell" && password === "1234") // Todo: comprobar autenticación
      JwToken.generateToken({user}).then((token) => {
        res.json({token});
      });
  };
}
