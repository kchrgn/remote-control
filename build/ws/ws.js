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
        this.client = null;
        this.wss = new WebSocketServer({ port });
        const srvInfo = this.wss.address();
        console.log(`Server web socket parameters: port: ${srvInfo.port}, family: ${srvInfo.family}`);
        this.wss.on('connection', (ws) => {
            console.log('Client connected');
            this.client = ws;
            const dataStream = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });
            dataStream.on('data', (data) => __awaiter(this, void 0, void 0, function* () {
                console.log('Received command: ', data);
                const result = yield commandHandler(data);
                dataStream.write(result);
            }));
        });
        this.wss.on('error', (err) => {
            console.log('WS server can not be started. Error: ', err.message);
            console.log('Try to close node.js process in task manager');
            process.exit(0);
        });
    }
    close() {
        var _a;
        (_a = this.client) === null || _a === void 0 ? void 0 : _a.close();
        this.wss.close();
        process.exit(0);
    }
}
