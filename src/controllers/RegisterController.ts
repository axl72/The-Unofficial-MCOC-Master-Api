import { Request, Response } from "express";
import { encrypt } from "../services/encrypt.service";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class RegisterController {

    public register = async (req:Request, res: Response) => {
        const {email, password} = req.body;

        const encryptedPassword = encrypt(password);

        //Enviar email

        await prisma.user.create({data: {
            email: email,
            password: encryptedPassword!
        }})

        //Enviar email de validación


        
    }

    public validateEmail = (req:Request, res:Response) => {

    }
}