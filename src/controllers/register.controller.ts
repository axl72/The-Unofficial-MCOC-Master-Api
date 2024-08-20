import { Request, Response } from "express";
import { encrypt } from "../services/encrypt.service";
import { PrismaClient } from "@prisma/client";
import { Mailer } from "../services/mailer.service";
import { envs } from "../services/envs.service";

const prisma = new PrismaClient();

export class RegisterController {

    public register = async (req:Request, res: Response) => {
        const {email, password} = req.body;

        const encryptedPassword = encrypt(password);

        //Enviar email

        await prisma.user.create({data: {
            email: email,
            password: password,
            role: ''
        }})

        const {isSent, error} = await this.sendEmailValidation(email);

        if(!isSent!){
            return res.json({error: error})
        }

        return res.json({message: "Email send succesfuly"})

        
    }

    private sendEmailValidation = (email:string) => {
        const mailer = new Mailer(envs.MAILER_SERVICE!, envs.MAILER_EMAIL!, envs.MAILER_KEY!)

        return mailer.sendEmail(email).then(({isSent, error}) => {
            return {isSent, error}
        })
    }

    public validateEmail = (req:Request, res:Response) => {

    }
}