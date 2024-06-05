/**
 * @typedef { import("vike/types").PageContextServer } PageContext
 */

/**
 * @param {PageContext} pageContext
 * @return {CanonicalPaths}
 */
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

/**
 * @param  {PageContext} pageContext
 * @return {HeadProps}
 */
export function mergeHeadProps(pageContext) {
  const { config } = pageContext
  /** @type {HeadProps} */
  const props = {}
  const objProps = config?.headProps

  const getProps =
    typeof config?.getHeadProps === 'function'
      ? config.getHeadProps(pageContext)
      : undefined

  // Defaults merge assignment
  props.description = getProps?.description || objProps?.description || ''
  props.title =
    getProps?.title || objProps?.title || import.meta.env.VITE_TITLE || 'Hello'
  props.titleTemplate =
    getProps?.titleTemplate ||
    objProps?.titleTemplate ||
    import.meta.env.VITE_TITLE_TEMPLATE + '' ||
    '%s'
  props.titleFull = props.titleTemplate.replace('%s', props.title)

  return props
}

/**
 * Build Open Graph properties https://ogp.me/
 * @param  {PageContext} pageContext
 * @param  {HeadProps} headProps
 * @return {OGProps}
 */
export function mergeOGProps(pageContext, headProps) {
  const { canonicalPaths } = pageContext
  const { config } = pageContext
  /** @type {OGProps} */
  const props = {}
  const objProps = config?.ogProps
  const getProps =
    typeof config?.getOGProps === 'function'
      ? config.getOGProps(pageContext, headProps)
      : undefined

  // Defaults merge assignment
  props.description =
    getProps?.description || objProps?.description || headProps?.description
  props.title = getProps?.title || objProps?.title || headProps?.title
  props.url = getProps?.url || objProps?.url || canonicalPaths.absolute

  return props
}

/**
 * @param  {PageContext} pageContext
 * @param  {HeadProps} headProps
 * @return {StructuredData}
 */
export function mergeStructuredData(pageContext, headProps) {
  const { config } = pageContext

  // SEE: https://developers.google.com/search/docs/appearance/structured-data
  return Object.assign(
    {},
    config?.structuredData,
    typeof config?.getStructuredData === 'function'
      ? config.getStructuredData(pageContext, headProps)
      : undefined
  )
}
