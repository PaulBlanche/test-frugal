import * as frugal from "frugal-node/config";

import { coco } from "./foo.js";

coco();

/** @type {frugal.ServerConfig} */
export default {
	middlewares: [
		async (context, next) => {
			console.log("before middleware");
			const response = await next(context);
			console.log("after middleware");
			return response;
		},
	],
};
