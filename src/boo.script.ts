import { bar, biBi } from "./bar.module.css";

console.log("boo.script.ts", bar, biBi);

if (import.meta.environment === "client") {
    console.log("client");
}

if (import.meta.environment === "server") {
    console.log("server");
}
