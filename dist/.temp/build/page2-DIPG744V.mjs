import "./chunk-QGLEQPI7.mjs";

// page2.ts
var route = "/page";
function render(context) {
  return `page2
${context.assets.get("css").map((asset) => JSON.stringify(asset)).join(" ")}
${context.assets.get("js").map((asset) => JSON.stringify(asset)).join(" ")}`;
}
export {
  render,
  route
};
