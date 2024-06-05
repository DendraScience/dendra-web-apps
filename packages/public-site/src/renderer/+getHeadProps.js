export default getHeadProps

/**
 * @type GetHeadPropsFunction
 */
function getHeadProps(pageContext) {
  return {
    title: pageContext?.data?.staticPage?.meta_info?.title,
    description: pageContext?.data?.staticPage?.meta_info?.description
  }
}
