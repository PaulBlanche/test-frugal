import * as frugal from "frugal";
import config from "./frugal.config.js";
import * as http from "node:http";

await frugal.build(config);

const { default: handler } = await import("./.vercel/output/functions/index.func/index.mjs");

const server = http.createServer(handler);

server.listen(5000, "0.0.0.0");

// zozo
//const context = await frugal.context(config);
//await context.watch({ port: 5000 });

//console.log(await frugal.exportKey());
