import { createCustomPageContext } from '#root/renderer/custom'

export { onBeforeRender }

async function onBeforeRender(pageContext) {
  const pageProps = {}
  return {
    pageContext: {
      ...(await createCustomPageContext(pageContext)),
      pageProps
    }
  }
}
