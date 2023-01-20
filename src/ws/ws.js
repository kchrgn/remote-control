import { createWebSocketStream, WebSocketServer } from "ws";

export class WSServer {
  constructor (port) {
    this.wss = new WebSocketServer({ port });
    this.wss.on('connection', (ws) => {
      const address = (ws._socket.address());
      console.log(`Server WS parameters: port: ${address.port}, family: ${address.family}, address: ${address.address}`);
      console.log(`Client WS parameters: port: ${ws._socket.remotePort}, address: ${ws._socket.remoteAddress}`);
      const backStream = createWebSocketStream(ws, { encoding: 'utf8' });
      backStream.pipe(process.stdout);
    })
  }
  close() {
    this.wss.close();
  }
}