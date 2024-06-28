import { NextFunction, Request, Response } from "express";
import { JwToken } from "../services";

export class AuthMiddleware {
    static async validateJWT(req: Request, res: Response, next: NextFunction) {
        const authorization = req.header('Authorization')

        if(!authorization) return res.status(401).json({error: 'No token provide'})
        if(!authorization.startsWith('Bearer ')) return res.status(401).json({error: 'Invalid Bearer Token'})

        const [scheme, token] = authorization.split(' ');

        if(scheme !==  'Bearer') {
            return res.status(400).json({message: 'Invalid Format'})
        }

        try {
            const payload = await JwToken.validateToken<{user: string}>(token);
            if(!payload) return res.status(401).json({error: 'Invalid Token'})

            if(payload.user !==  'axell') return res.status(401).json({message: 'Invalid token user'})
            
            next()
            
        }catch(error) {

        }
        
    }
}