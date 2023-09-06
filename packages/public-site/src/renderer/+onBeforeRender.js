import { getCanonicalPaths, getDocumentProps } from './helpers'

export default onBeforeRender

async function onBeforeRender(pageContext) {
  const canonicalPaths = getCanonicalPaths(pageContext)
  const documentProps = getDocumentProps(pageContext)

  return {
    pageContext: {
      canonicalPaths,
      documentProps
    }
  }
}
