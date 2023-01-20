import { httpServer } from "./src/http_server/index.js";
import { mouse } from "@nut-tree/nut-js";
import { WSServer } from "./src/ws/ws.js";

const HTTP_PORT = 8181;
const WSS_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
new WSServer(WSS_PORT);
process.on('SIGINT', () => WSServer.close());
