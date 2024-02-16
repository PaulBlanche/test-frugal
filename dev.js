import * as frugal from "frugal-node";
import config from "./frugal.config.js";

const context = await frugal.context(config);
context.watch({
    port: 5000,
})
