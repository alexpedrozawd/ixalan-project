import { copyFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')

// All routes that need a real index.html so GitHub Pages finds them directly.
// Each entry creates dist/<route>/index.html as a copy of dist/index.html.
const ROUTES = [
  'articles',
  'articles/rampaging-ferocidon-banned',
  'articles/be-prepared-for-rix-release',
  'articles/welcome-to-ixalan-news',
  'articles/river-sneak-best-merfolk',
]

for (const route of ROUTES) {
  const dir = join(distDir, route)
  mkdirSync(dir, { recursive: true })
  copyFileSync(join(distDir, 'index.html'), join(dir, 'index.html'))
  console.log(`  created dist/${route}/index.html`)
}

console.log(`✓ SPA route stubs generated (${ROUTES.length} routes)`)
