import { createWebSocketStream, WebSocketServer, WebSocket, AddressInfo } from 'ws';
import { commandHandler } from  '../commands/commands.js';

export class WSServer {
  wss: WebSocketServer;
  client: WebSocket | null;
  constructor (port: number) {
    this.client = null
    this.wss = new WebSocketServer({ port });
    const srvInfo: AddressInfo = this.wss.address() as AddressInfo;
    console.log(`Server web socket parameters: port: ${srvInfo.port}, family: ${srvInfo.family}`);
    this.wss.on('connection', (ws: WebSocket) => {
      console.log('Client connected');
      this.client = ws;
      const dataStream = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false});
      dataStream.on('data', async (data: string) => {
        console.log('Received command: ', data);
        const result = await commandHandler(data);
        dataStream.write(result)
      })
    })
    this.wss.on('error', (err) => { 
      console.log('WS server can not be started. Error: ', err.message);
      console.log('Try to close node.js process in task manager');
      process.exit(0);
    });
  }
  close() {
    this.client?.close()
    this.wss.close();
    process.exit(0);
  }
}