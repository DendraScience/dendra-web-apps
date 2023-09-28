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
  const { config } = pageContext
  const props = {}
  const objProps = config?.documentProps
  const getProps =
    typeof config?.getDocumentProps === 'function'
      ? config.getDocumentProps(pageContext)
      : undefined

  // Defaults merge assignment
  props.description = getProps?.description || objProps?.description || ''
  props.title =
    getProps?.title || objProps?.title || import.meta.env.VITE_TITLE || 'Hello'
  props.titleTemplate =
    getProps?.titleTemplate ||
    objProps?.titleTemplate ||
    import.meta.env.VITE_TITLE_TEMPLATE ||
    '%s'
  props.titleFull = props.titleTemplate.replace('%s', props.title)

  return props
}

// Build Open Graph properties
// SEE: https://ogp.me/
export function getOGProps(data) {
  const { canonicalPaths, documentProps, pageContext } = data
  const { config } = pageContext
  const props = {}
  const objProps = config?.ogProps
  const getProps =
    typeof config?.getOGProps === 'function'
      ? config.getOGProps(data)
      : undefined

  // Defaults merge assignment
  props.description =
    getProps?.description || objProps?.description || documentProps?.description
  props.title = getProps?.title || objProps?.title || documentProps?.title
  props.url = getProps?.url || objProps?.url || canonicalPaths.absolute

  return props
}

export function getStructuredData(data) {
  const { pageContext } = data
  const { config } = pageContext

  // SEE: https://developers.google.com/search/docs/appearance/structured-data
  return Object.assign(
    {},
    config?.structuredData,
    typeof config?.getStructuredData === 'function'
      ? config.getStructuredData(data)
      : undefined
  )
}
