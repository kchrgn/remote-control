import { createWebSocketStream, WebSocketServer } from 'ws';
import { commandHandler } from  '../commands/commands.js';

export class WSServer {
  constructor (port) {
    this.wss = new WebSocketServer({ port });
    this.wss.on('connection', (ws) => {
      const address = (ws._socket.address());
      console.log(`Server WS parameters: port: ${address.port}, family: ${address.family}, address: ${address.address}`);
      console.log(`Client WS parameters: port: ${ws._socket.remotePort}, address: ${ws._socket.remoteAddress}`);
      const dataStream = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false});
      dataStream.on('data', async (data) => {
        console.log('Recieved command: ', data);
        const result = await commandHandler(data);
        dataStream.write(result)
      })
    })
  }
  close() {
    this.wss.close();
  }
}