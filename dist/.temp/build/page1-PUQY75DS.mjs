import "./chunk-QGLEQPI7.mjs";

// page1.ts
import * as frugal from "frugal/page";

// cssModuleHelper:format.js
function format(...classNames) {
  const list = classNames.flatMap((name) => name.split(" "));
  return [...new Set(list)].join(" ");
}

// bar.module.css
var bar = format("Og4z_W_bar");
var bi = format("Og4z_W_bi");
var biBi = format("Og4z_W_bi-bi");
var bo = format("Og4z_W_bo");

// boo.script.ts
console.log("boo.script.ts", bar, biBi);
if (false) {
  console.log("client");
}
if (true) {
  console.log("server");
}

// page1.ts
var route = "/page1/:id/:od";
var strictPaths = false;
function getBuildPaths() {
  return [{ id: "1", od: "1" }];
}
function build() {
  return new frugal.DataResponse(
    {},
    {
      headers: { foo: "bar", baz: "bul" },
      status: 400
    }
  );
}
function generate() {
  return new frugal.DataResponse(
    {},
    {
      headers: { foo: "bar", baz: "bul" },
      status: 401
    }
  );
}
function render(context) {
  return `page1 ca
${context.assets.get("css").map((asset) => JSON.stringify(asset)).join(" ")}
${context.assets.get("js").map((asset) => JSON.stringify(asset)).join(" ")}`;
}
export {
  build,
  generate,
  getBuildPaths,
  render,
  route,
  strictPaths
};
