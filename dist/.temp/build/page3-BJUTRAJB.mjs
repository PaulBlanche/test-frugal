import "./chunk-QGLEQPI7.mjs";

// page3.ts
import * as frugal from "frugal/page";
var type = "dynamic";
var route = "/page3/:id/:od";
function generate({ params }) {
  return new frugal.DataResponse({ params });
}
function render(context) {
  return `page3
${JSON.stringify(context.params)}
${context.assets.get("css").map((asset) => JSON.stringify(asset)).join(" ")}
${context.assets.get("js").map((asset) => JSON.stringify(asset)).join(" ")}`;
}
export {
  generate,
  render,
  route,
  type
};
