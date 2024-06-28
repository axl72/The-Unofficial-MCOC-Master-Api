import jwt from 'jsonwebtoken'
import { envs } from './envs.service';

export class JwToken {
    static async generateToken(payload:any, duration:string='2h') {
        return new Promise((resolve) => {
            jwt.sign(payload, envs.TOKEN_SECRET_KEY!, {expiresIn: duration}, (err, token) => {
                if(err) {
                    return resolve(null);
                }
                resolve(token)
            })
        })
    }

    static async validateToken<T>(token: string): Promise<T> {
        return new Promise((resolve) => {
            jwt.verify(token, envs.TOKEN_SECRET_KEY!, (err, decoded) => {
                resolve(decoded as T)
            })
        })
    }
}