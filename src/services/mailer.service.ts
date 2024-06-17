import nodemailer, { Transporter } from 'nodemailer'
import { JwToken } from './jwtoken.service'
import { envs } from './envs.service'


export class Mailer {
    private transporter: Transporter

    public constructor(mailerService:string, mailerEmail: string, senderEmailKey: string){
        this.transporter = nodemailer.createTransport({
            service: mailerService,
            auth: {
                user: mailerEmail,
                pass: senderEmailKey
            }
        })
    }

    public async sendEmail(email:string) {
        const token = await JwToken.generateToken({email})

        if(!token) throw new Error('Error on generated token');

        const link = `${envs.WEBSERVICE_URL}`
        const html = `
            <h1>Validate your email</h1>
            <p>Click on the follow link to validate your email</p>
            <a href="${link}">Validate your email ${email}</a>
        `

        const options = {
            to: email,
            subject: 'Email validation',
            html: html
        }

        try{
            await this.transporter.sendMail(options)

        }catch(error){
            return {isSent: false, error: `error: ${error}`}
        }

        return {isSent: true, error: null};
    }
}