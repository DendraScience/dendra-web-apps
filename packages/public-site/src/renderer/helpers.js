export function getCanonicalPaths(pageContext) {
  const { urlPathname } = pageContext

  const base = `https://${import.meta.env.VITE_DOMAIN}`
  const url = new URL(urlPathname.replace(/\/$/, ''), base)
  const absolute = url.href
  const relative = url.pathname

  return {
    base,
    absolute,
    relative
  }
}

export function getDocumentProps(pageContext) {
  const { config, pageProps } = pageContext

  const props = Object.assign(
    {},
    config?.documentProps,
    pageContext?.documentProps,
    typeof pageContext?.getDocumentProps === 'function'
      ? pageContext.getDocumentProps(pageProps)
      : undefined
  )
  props.title = props.title || import.meta.env.VITE_TITLE || 'Hello'
  props.titleTemplate =
    props.titleTemplate || import.meta.env.VITE_TITLE_TEMPLATE || '%s'
  props.titleFull = props.titleTemplate.replace('%s', props.title)

  return props
}

export function getOGProps(data) {
  const { canonicalPaths, documentProps, pageContext } = data
  const { config } = pageContext

  // Process Open Graph properties
  // SEE: https://ogp.me/
  const props = Object.assign(
    {},
    config?.ogProps,
    pageContext?.ogProps,
    typeof pageContext?.getOGProps === 'function'
      ? pageContext.getOGProps(data)
      : undefined
  )
  props.description = props.description || documentProps.description
  props.title = props.title || documentProps.title
  props.url = props.url || canonicalPaths.absolute

  return props
}

export function getStructuredData(data) {
  const { pageContext } = data
  const { config } = pageContext

  // SEE: https://developers.google.com/search/docs/appearance/structured-data
  return Object.assign(
    {},
    config?.structuredData,
    pageContext?.structuredData,
    typeof pageContext?.getStructuredData === 'function'
      ? pageContext.getStructuredData(data)
      : undefined
  )
}
