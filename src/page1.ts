import * as frugal from "frugal-node/page";

import * as fs from "node:fs";
import "./boo.script.ts";
import "./test.css";

export const route = "/page1/:id/:od";
export const strictPaths = false;

type Data = {
	content: string;
};

export function getBuildPaths() {
	return [{ id: "1", od: "1" }];
}

export async function build(context: frugal.BuildContext<typeof route>) {
	const content = await fs.promises.readFile(new URL("./data.txt", import.meta.url), {
		encoding: "utf-8",
	});
	return context.data<Data>(
		{ content },
		{
			headers: { foo: "bar", baz: "bul" },
			status: 400,
		},
	);
}

export async function generate(context: frugal.GenerateContext<typeof route>) {
	const content = await fs.promises.readFile(new URL("./data.txt", import.meta.url), {
		encoding: "utf-8",
	});
	return context.data<Data>(
		{ content },
		{
			headers: { foo: "bar", baz: "bul" },
			status: 401,
		},
	);
}

export function render(context: frugal.RenderContext<typeof route, Data>) {
	return `page1 \n${context.data.content}\n${context.assets
		.get("css")
		.map((asset) => JSON.stringify(asset))
		.join(" ")}\n${context.assets
		.get("js")
		.map((asset) => JSON.stringify(asset))
		.join(" ")}`;
}
