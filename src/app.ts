import { Server } from "./Server";
import { ServerOptions } from "./Server";
import { envs } from "./services/envs.service";

const opts:ServerOptions = {
    PORT: envs.PORT
}

const server = new Server(opts);
server.start();