import { vercel } from "@frugal-node/exporter-vercel";
import { css } from "@frugal-node/plugin-css";
import { script } from "@frugal-node/plugin-script";
import * as frugal from "frugal-node/config";

import { coco } from "./foo.js";

coco();

/** @type {frugal.BuildConfig} */
export default {
	exporter: vercel(),
	plugins: [
		css({
			cssModule: true,
			scope: "global",
			globalCss: ["./src/global1.css", "./src/test/global1.css", "./src/global2.css"],
		}),
		script(),
	],
};
