import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const pkgName = path.basename(
  path.dirname(fileURLToPath(import.meta.url))
)
