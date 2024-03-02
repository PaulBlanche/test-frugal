import * as frugal from "frugal-node/config";
import { coco } from "./foo.js";

coco();

/** @type {frugal.Config} */
export default {
	self: import.meta.url,
	outdir: "./dist",
	pages: ["./src/page1.ts", "./src/page2.ts", "./src/page3.ts"],
	log: {
		level: "verbose",
	},
	server: {
		middlewares: [
			async (context, next) => {
				console.log("before middleware");
				const response = await next(context);
				console.log("after middleware");
				return response;
			},
		],	
	}
};
