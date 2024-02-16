import * as frugal from "frugal/page";

import "./test.css";
import "./boo.script.ts";

export const route = "/page1/:id/:od";
export const strictPaths = false;

export function getBuildPaths() {
	return [{ id: "1", od: "1" }];
}

export function build() {
	return new frugal.DataResponse(
		{},
		{
			headers: { foo: "bar", baz: "bul" },
			status: 400,
		},
	);
}

export function generate() {
	return new frugal.DataResponse(
		{},
		{
			headers: { foo: "bar", baz: "bul" },
			status: 401,
		},
	);
}

export function render(context: frugal.RenderContext<typeof route, any>) {
	return `page1 ca\n${context.assets
		.get("css")
		.map((asset) => JSON.stringify(asset))
		.join(" ")}\n${context.assets
		.get("js")
		.map((asset) => JSON.stringify(asset))
		.join(" ")}`;
}
