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
if (true) {
  console.log("client");
}
if (false) {
  console.log("server");
}
