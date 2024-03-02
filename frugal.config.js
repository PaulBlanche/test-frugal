import * as frugal from "frugal-node/config";

const foo = "config";

/** @type {frugal.Config} */
export default {
	self: import.meta.url,
	outdir: "./dist",
	pages: ["./src/page1.ts", "./src/page2.ts", "./src/page3.ts"],
	log: {
		level: "verbose",
	},
	serverConfig: new URL(`./config/frugal.config.server.js`, import.meta.url),
	buildConfig: new URL(`./config/frugal.${foo}.build.js`, import.meta.url),
};
