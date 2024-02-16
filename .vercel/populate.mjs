import { kv } from '@vercel/kv'

await kv.flushall();
await Promise.all([
  kv.set("/page", {"path":"/page","hash":"4L0QP4","body":"page2\n{\"type\":\"css\",\"scope\":\"global\",\"path\":\"/css/stdin-SNP7XIS5.css\"}\n","headers":[],"status":200}),
  kv.set("/page1/1/1", {"path":"/page1/1/1","hash":"1KQ1SQB","body":"page1 ca\n{\"type\":\"css\",\"scope\":\"global\",\"path\":\"/css/stdin-SNP7XIS5.css\"}\n{\"type\":\"js\",\"scope\":\"page\",\"entrypoint\":\"page1.ts\",\"path\":\"/js/page1-2TCUOU5B.mjs\"}","headers":[["baz","bul"],["foo","bar"]],"status":400})
]);
