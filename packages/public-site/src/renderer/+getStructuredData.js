export default getStructuredData

function getStructuredData({ documentProps, pageContext }) {
  return (
    pageContext?.structuredData || {
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      name: documentProps.title,
      description: documentProps.description
    }
  )
}
