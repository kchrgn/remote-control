import { createWebSocketStream, WebSocketServer } from "ws";

export const initWSConnection = () => {
  const wss = new WebSocketServer({ port: 8080 });
  wss.on('connection', (ws) => {
    const backStream = createWebSocketStream(ws, { encoding: 'utf8' });
    backStream.pipe(process.stdout);
  })
}