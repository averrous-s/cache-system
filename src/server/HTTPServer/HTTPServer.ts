import { createServer, Server } from 'http';
import {HTTPHandler} from './HTTPHandler';
export interface HTTPServerType {
    server: Server;
    run: (port: number) => void;
}

export class HTTPServer implements HTTPServerType {
    server: Server;
    constructor() {
        this.server = createServer((request, response) => {
            return new HTTPHandler(request, response);
        })
    }

    run = (port: number) => {
        this.server.listen(port);
        console.log(`Server is running in port ${port}`);
    }
}