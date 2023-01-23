var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createWebSocketStream, WebSocketServer } from 'ws';
import { commandHandler } from '../commands/commands.js';
export class WSServer {
    constructor(port) {
        this.wss = new WebSocketServer({ port });
        const srvInfo = this.wss.address();
        console.log(`Server web socket parameters: port: ${srvInfo.port}, family: ${srvInfo.family}, address: ${srvInfo.address}`);
        this.wss.on('connection', (ws) => {
            const dataStream = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });
            dataStream.on('data', (data) => __awaiter(this, void 0, void 0, function* () {
                console.log('Received command: ', data);
                const result = yield commandHandler(data);
                dataStream.write(result);
            }));
        });
    }
    close() {
        this.wss.close();
    }
}
