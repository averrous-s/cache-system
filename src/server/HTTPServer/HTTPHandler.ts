import { IncomingMessage, ServerResponse } from "http";

export interface HTTPHandler {
}
export class HTTPHandler implements HTTPHandler {
    constructor (request : IncomingMessage, response: ServerResponse) {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.write('<h1>Test</h1>');
        response.end();
    }
}