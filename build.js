import * as frugal from "frugal-node";
import config from "./frugal.config.js";
import buildConfig from "./frugal.config.build.js";

await frugal.build(config, buildConfig);
