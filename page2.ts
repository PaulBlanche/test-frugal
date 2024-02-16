import * as frugal from "frugal/page";

import "./test.css";

export const route = "/page";

export function render(context: frugal.RenderContext<typeof route, any>) {
	return `page2\n${context.assets
		.get("css")
		.map((asset) => JSON.stringify(asset))
		.join(" ")}\n${context.assets
		.get("js")
		.map((asset) => JSON.stringify(asset))
		.join(" ")}`;
}
