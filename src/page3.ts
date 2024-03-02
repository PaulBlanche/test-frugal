import * as frugal from "frugal-node/page";

import "./test.css";

export const type = "dynamic";

export const route = "/page3/:id/:od";

export function generate(context: frugal.GenerateContext<typeof route>) {
	return context.data({ params: context.params });
}

export function render(context: frugal.RenderContext<typeof route, any>) {
	return `page3\n${JSON.stringify(context.params)}\n${context.assets
		.get("css")
		.map((asset) => JSON.stringify(asset))
		.join(" ")}\n${context.assets
		.get("js")
		.map((asset) => JSON.stringify(asset))
		.join(" ")}`;
}
