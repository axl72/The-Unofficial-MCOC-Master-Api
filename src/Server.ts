import express, { Application, Request, Response, Router } from 'express'
import { AppRoutes } from './AppRoutes';

export interface ServerOptions  {

};

export class Server {
    private serverOptions: ServerOptions;
    private app:Application = express();
    private routes:Router = AppRoutes.routes;
    
    public constructor(options: ServerOptions){
        this.serverOptions = options
    }



    public start():void {
        this.app.use(this.routes);
        this.app.listen(3000, () => {
            console.log('Escuhando en el puerto 3000')
        })
    }
}