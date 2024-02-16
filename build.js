import * as frugal from "frugal";
import config from "./frugal.config.js";
import * as util from '@vercel/routing-utils'

const { routes } = util.getTransformedRoutes({
    redirects: [
      { source: '/me', destination: '/profile.html' },
      { source: '/view-source', destination: 'https://github.com/vercel/vercel' },
    ],
    rewrites: [{
        source: "/(.*)",
        destination: "/"
    }]
  });

console.log(routes)

//await frugal.build(config);

// zozo
//const context = await frugal.context(config);
//await context.watch({ port: 5000 });

//console.log(await frugal.exportKey());
