import { createWebSocketStream, WebSocketServer, WebSocket } from 'ws';
import { commandHandler } from  '../commands/commands.js';

// interface

export class WSServer {
  wss: WebSocketServer;
  constructor (server_port: number) {
    this.wss = new WebSocketServer({ server_port });
    const {address, family, port} = this.wss.address();
    console.log(address)
    console.log(`Server WS parameters: port: ${port}, family: ${family}, address: ${address}`);
    this.wss.on('connection', (ws: WebSocket) => {
      // console.log(ws);
      // const address = (ws._socket.address());
      // console.log(`Client WS parameters: port: ${ws._socket.remotePort}, address: ${ws._socket.remoteAddress}`);
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