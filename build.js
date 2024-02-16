import * as frugal from "frugal";
import config from "./frugal.config.js";

await frugal.build(config);

// zozo
//const context = await frugal.context(config);
//await context.watch({ port: 5000 });

//console.log(await frugal.exportKey());
