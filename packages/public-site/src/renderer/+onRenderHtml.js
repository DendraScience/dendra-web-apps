import { renderToNodeStream } from '@vue/server-renderer'
import { escapeInject } from 'vite-plugin-ssr/server'
import { createApp } from './app'
import { getCustomProps } from './getCustomProps'
import { logger } from '#common/lib/log'

export default onRenderHtml

const appName = import.meta.env.VITE_APP_NAME || ''
const maskIconColor = import.meta.env.VITE_MASK_ICON_COLOR || '#4caf50'
const msTileColor = import.meta.env.VITE_MS_TILE_COLOR || '#00a300'

// SEE: https://developers.google.com/tag-platform/tag-manager/web
const gtmContainerId = import.meta.env.VITE_GTM_CONTAINER_ID
const gtmScriptTag = gtmContainerId
  ? escapeInject`<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmContainerId}');</script>`
  : ''
const gtmNoScriptTag = gtmContainerId
  ? escapeInject`<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${gtmContainerId}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`
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
  const customProps = getCustomProps(pageContext)
  const { canonicalPaths, documentProps } = customProps

  const descriptionTag = !documentProps.description
    ? ''
    : escapeInject`<meta name="description" content="${documentProps.description}" />`
  // Process Open Graph properties
  // SEE: https://ogp.me/
  const ogTags = Object.entries(documentProps.og).reduce((tags, [key, val]) => {
    return !val
      ? tags
      : escapeInject`${tags}<meta property="og:${key}" content="${val}" />`
  }, '')

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
        <meta charset="UTF-8" />
        ${gtmScriptTag}
        <meta name="application-name" content="${appName}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3" />
        <link rel="manifest" href="/site.webmanifest?v=3" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=3" color="${maskIconColor}" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <meta name="msapplication-TileColor" content="${msTileColor}" />
        <meta name="theme-color" content="#ffffff" />
        <title>${documentProps.titleFull}</title>
        ${descriptionTag}
        ${ogTags}
      </head>
      <body>
        ${gtmNoScriptTag}
        <div id="app">${stream}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      ...customProps,
      enableEagerStreaming: true
    }
  }
}
