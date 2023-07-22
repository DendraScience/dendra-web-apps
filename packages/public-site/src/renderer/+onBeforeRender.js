import { createCustomPageContext } from './custom'

export default onBeforeRender

async function onBeforeRender(pageContext) {
  return {
    pageContext: {
      ...(await createCustomPageContext(pageContext))
    }
  }
}
