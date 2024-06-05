export default getStructuredData

/**
 * @type GetStructuredDataFunction
 */
function getStructuredData(pageContext, headProps) {
  return {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: headProps.title,
    description: headProps.description
  }
}
