import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"

function vercelApiDevPlugin(): Plugin {
  return {
    name: 'vercel-api-dev',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url && req.url.startsWith('/api/comments')) {
          try {
            // @ts-expect-error dynamic serverless handler in dev mode
            const mod = await import('./api/comments.js')
            const urlObj = new URL(req.url, 'http://localhost:5173')
            const query: Record<string, string> = {}
            urlObj.searchParams.forEach((val, key) => {
              query[key] = val
            })

            let body = ''
            req.on('data', (chunk) => {
              body += chunk
            })
            req.on('end', async () => {
              let parsedBody = {}
              try {
                parsedBody = body ? JSON.parse(body) : {}
              } catch {
                parsedBody = {}
              }

              const vReq = {
                method: req.method,
                query,
                body: parsedBody
              }
              const vRes = {
                statusCode: 200,
                setHeader(k: string, v: string) {
                  res.setHeader(k, v)
                },
                status(code: number) {
                  this.statusCode = code
                  res.statusCode = code
                  return this
                },
                json(data: unknown) {
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify(data))
                },
                end() {
                  res.end()
                }
              }
              await mod.default(vReq, vRes)
            })
            return
          } catch (err: unknown) {
            res.statusCode = 500
            const msg = err instanceof Error ? err.message : 'Internal Server Error'
            res.end(JSON.stringify({ error: msg }))
            return
          }
        }
        next()
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss(), vercelApiDevPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-animation": ["motion", "gsap"],
          "vendor-icons": ["react-icons", "lucide-react", "@tabler/icons-react"],
        },
      },
    },
  },
})
