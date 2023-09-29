import { renderToNodeStream } from '@vue/server-renderer'
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr/server'
import { createApp } from './app'
import { getDocumentProps, getOGProps, getStructuredData } from './helpers'
import { logger } from '#common/lib/logger'

export default onRenderHtml

const appName = import.meta.env.VITE_APP_NAME || ''
const maskIconColor = import.meta.env.VITE_MASK_ICON_COLOR || '#4caf50'
const msTileColor = import.meta.env.VITE_MS_TILE_COLOR || '#00a300'

// SEE: https://developers.google.com/analytics/devguides/collection/gtagjs
const gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID
const gaScriptTag = gaTrackingId
  ? escapeInject`<script async src="https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}"></script>`
  : ''

const sitemapExclusions = []

async function onRenderHtml(pageContext) {
  const { movedTo, redirectTo, sitemap } = pageContext
  if (movedTo)
    return {
      pageContext: {
        movedTo
      }
    }
  if (redirectTo)
    return {
      pageContext: {
        redirectTo
      }
    }

  const app = createApp(pageContext)
  const stream = renderToNodeStream(app)
  const { canonicalPaths } = pageContext
  const documentProps = getDocumentProps(pageContext)
  const ogProps = getOGProps({ canonicalPaths, documentProps, pageContext })
  const structuredData = getStructuredData({
    canonicalPaths,
    documentProps,
    pageContext
  })

  const descriptionTag = documentProps.description
    ? escapeInject`<meta name="description" content="${documentProps.description}" />`
    : ''
  const ogTags = Object.entries(ogProps).reduce((tags, [key, val]) => {
    return !val
      ? tags
      : escapeInject`${tags}<meta property="og:${key}" content="${val}" />`
  }, '')
  const ldScriptTag = Object.keys(structuredData).length
    ? escapeInject`<script type="application/ld+json">${dangerouslySkipEscape(
        JSON.stringify(structuredData)
      )}</script>`
    : ''

  logger.info('Rendering document %s', canonicalPaths.relative)

  // Build sitemap during custom prerender
  if (sitemap) {
    const { base, relative } = canonicalPaths

    if (!sitemapExclusions.includes(relative))
      sitemap.links.push({
        url: relative
      })

    if (relative === '/') sitemap.base = base
  }

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        ${gaScriptTag}
        <link rel="canonical" href="${canonicalPaths.absolute}" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3" />
        <link rel="manifest" href="/site.webmanifest?v=3" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=3" color="${maskIconColor}" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="application-name" content="${appName}" />
        <meta name="msapplication-TileColor" content="${msTileColor}" />
        <meta name="theme-color" content="#ffffff" />
        <title>${documentProps.titleFull}</title>
        ${descriptionTag}
        ${ogTags}
        ${ldScriptTag}
      </head>
      <body>
        <div id="app">${stream}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      canonicalPaths,
      documentProps,
      enableEagerStreaming: true
    }
  }
}
