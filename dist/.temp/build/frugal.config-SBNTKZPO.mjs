// frugal.config.js
import * as frugal from "frugal";
import { css } from "@frugal/plugin-css";
import { script } from "@frugal/plugin-script";
import { vercel } from "@frugal/exporter-vercel";
var frugal_config_default = {
  self: import.meta.url,
  pages: ["./page1.ts", "./page2.ts", "./page3.ts"],
  log: {
    level: "silent"
  },
  outdir: "./dist",
  exporter: vercel(),
  plugins: [
    css({
      cssModule: true,
      scope: "global",
      globalCss: ["./global1.css", "./test/global1.css", "./global2.css"]
    }),
    script()
  ]
};
export {
  frugal_config_default as default
};
