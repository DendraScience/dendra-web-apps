import { createCustomPageContext } from '#root/renderer/custom'

export default onBeforeRender

async function onBeforeRender(pageContext) {
  const pageProps = {}
  return {
    pageContext: {
      ...(await createCustomPageContext(pageContext)),
      pageProps
    }
  }
}
