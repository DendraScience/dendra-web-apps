export default getOGProps

function getOGProps({ pageContext }) {
  return {
    title: pageContext.metaInfo?.og_title,
    description: pageContext.metaInfo?.og_description
  }
}
