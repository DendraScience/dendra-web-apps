import { createSSRApp, h } from 'vue'
import { setPageContext } from './usePageContext'
import LayoutDefault from '#root/layouts/LayoutDefault.vue'
import i18n from './i18n'
import vuetify from './vuetify'

export { createApp }

function createApp(pageContext) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = {
    render() {
      return h(
        pageContext.exports.Layout || LayoutDefault,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          }
        }
      )
    }
  }

  const app = createSSRApp(PageWithLayout)

  app.use(i18n)
  app.use(vuetify)

  // We make `pageContext` available from any Vue component
  setPageContext(app, pageContext)

  return app
}
