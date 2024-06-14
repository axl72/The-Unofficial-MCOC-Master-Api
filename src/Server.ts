import express, { Application, Request, Response, Router } from 'express'
import { AppRoutes } from './AppRoutes';
import { envs } from './services/envs.service';

export interface ServerOptions  {
    PORT: any
};

export class Server {
    private opts: ServerOptions;
    private app:Application = express();
    private routes:Router = AppRoutes.routes;
    
    public constructor(options: ServerOptions){
        this.opts = options
    }



    public start():void {
        this.app.use(this.routes);
        this.app.listen(this.opts.PORT, () => {
            console.log(`Listening in port ${this.opts.PORT}`)
        })
    }
}