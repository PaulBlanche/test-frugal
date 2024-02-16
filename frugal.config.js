import * as frugal from "frugal";
import { css } from "@frugal/plugin-css";
import { script } from "@frugal/plugin-script";
import { vercel } from "@frugal/exporter-vercel";

/** @type {frugal.Config} */
export default {
	self: import.meta.url,
	pages: ["./page1.ts", "./page2.ts", "./page3.ts"],
	log: {
		level: "verbose",
	},
	outdir: "./dist",
	exporter: vercel(),
	plugins: [
		css({
			cssModule: true,
			scope: "global",
			globalCss: ["./global1.css", "./test/global1.css", "./global2.css"],
		}),
		script(),
	],
};

// zozo
//const context = await frugal.context(config);
//await context.watch({ port: 5000 });

//console.log(await frugal.exportKey());
