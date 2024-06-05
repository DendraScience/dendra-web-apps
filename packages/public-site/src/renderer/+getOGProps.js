export default getOGProps

/**
 * @type GetOGPropsFunction
 */
function getOGProps(pageContext) {
  return {
    title: pageContext?.data?.staticPage?.meta_info?.og_title,
    description: pageContext?.data?.staticPage?.meta_info?.og_description
  }
}
