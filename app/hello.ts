import { serve, Server } from 'https://deno.land/std@0.95.0/http/server.ts'

const port = 8080
const s: Server = serve({port})

console.log(`http://localhost:${port}/`)

for await (const req of s) {
  req.respond({
    body: 'Hello World\n'
  })
}