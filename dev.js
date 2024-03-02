import * as frugal from "frugal-node";
import config from "./frugal.config.js";
import buildConfig from "./frugal.config.build.js";

const context = await frugal.context(config, buildConfig);
context.watch({
    port: 5000,
})
