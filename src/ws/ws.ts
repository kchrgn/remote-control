import { createWebSocketStream, WebSocketServer, WebSocket, AddressInfo } from 'ws';
import { commandHandler } from  '../commands/commands.js';

export class WSServer {
  wss: WebSocketServer;
  constructor (port: number) {
    this.wss = new WebSocketServer({ port });
    const srvInfo: AddressInfo = this.wss.address() as AddressInfo;
    console.log(`Server web socket parameters: port: ${srvInfo.port}, family: ${srvInfo.family}, address: ${srvInfo.address}`);
    this.wss.on('connection', (ws: WebSocket) => {
      const dataStream = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false});
      dataStream.on('data', async (data: string) => {
        console.log('Received command: ', data);
        const result = await commandHandler(data);
        dataStream.write(result)
      })
    })
  }
  close() {
    this.wss.close();
  }
}