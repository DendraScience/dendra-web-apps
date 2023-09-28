export default getDocumentProps

function getDocumentProps(pageContext) {
  return {
    title: pageContext?.metaInfo?.title,
    description: pageContext?.metaInfo?.description
  }
}
