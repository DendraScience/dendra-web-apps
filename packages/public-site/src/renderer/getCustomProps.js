export function getCustomProps(pageContext) {
  const { config, urlPathname } = pageContext

  // canonicalPaths
  const base = `https://${import.meta.env.VITE_DOMAIN}`
  const url = new URL(urlPathname.replace(/\/$/, ''), base)
  const absolute = url.href
  const relative = url.pathname
  const canonicalPaths = {
    base,
    absolute,
    relative
  }

  // documentProps
  const documentProps = Object.assign(
    {},
    config?.documentProps,
    pageContext?.documentProps
  )
  documentProps.title =
    documentProps.title || import.meta.env.VITE_TITLE || 'Hello'
  documentProps.titleTemplate =
    documentProps.titleTemplate || import.meta.env.VITE_TITLE_TEMPLATE || '%s'
  documentProps.titleFull = documentProps.titleTemplate.replace(
    '%s',
    documentProps.title
  )

  // Process Open Graph properties
  // SEE: https://ogp.me/
  const og = Object.assign({}, documentProps.og)
  og.description = og.description || documentProps.description
  og.title = og.title || documentProps.title
  og.url = og.url || canonicalPaths.absolute
  documentProps.og = og

  return { canonicalPaths, documentProps }
}
