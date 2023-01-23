import { httpServer } from './http_server/index.js';
import { WSServer } from "./ws/ws.js";

const HTTP_PORT = 8181;
const WSS_PORT = 8080;
console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.on('error', (err) => { 
  console.log('Server can not be started. Error: ', err.message);
  console.log('Try to close node.js process in task manager');
  process.exit(0);
});
httpServer.listen(HTTP_PORT);
const wss = new WSServer(WSS_PORT);
process.on('SIGINT', () => wss.close());