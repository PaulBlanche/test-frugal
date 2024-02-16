const http = require("node:http")
const handler = require("./.vercel/output/functions/index.func/index.cjs")

const server = http.createServer((req, res) => {
    console.log('handle')
    return handler(req, res)
});

server.listen(5000, "0.0.0.0");

