import { writeFile } from 'node:fs/promises'
import { Readable } from 'stream'
import { SitemapStream, streamToPromise } from 'sitemap'
import { prerender } from 'vike/prerender'
import Pino from 'pino'
import { pkgName } from './build-utils.js'

const logger = Pino({
  level: 'info'
})
const sitemap = {
  base: '',
  links: []
}

// SEE: https://github.com/brillout/vike/issues/49
// SEE: https://github.com/ekalinin/sitemap.js
// SEE: https://www.sitemaps.org/protocol.html
async function afterPrerender() {
  const lastmod = new Date()

  for (const link of sitemap.links) {
    if (!link.lastmod) link.lastmod = lastmod
    if (!link.changefreq) link.changefreq = 'daily'
  }

  const stream = new SitemapStream({ hostname: sitemap.base })
  const data = await streamToPromise(Readable.from(sitemap.links).pipe(stream))

  logger.info('Writing sitemap')

  await writeFile(
    `../../output/${pkgName}/dist/client/sitemap.xml`,
    data.toString()
  )

  logger.info('Prerender done!')
}

logger.info('Prerender starting...')

prerender({
  pageContextInit: {
    sitemap
  }
}).then(afterPrerender)
