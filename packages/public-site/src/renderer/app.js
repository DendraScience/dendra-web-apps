import { createSSRApp, h } from 'vue'
import { setPageContext } from './usePageContext'
import LayoutDefault from '#root/layouts/LayoutDefault.vue'
// NOTE: Temporarily disabled due to build issues
// import i18n from '#common/lib/i18n'
import vuetify from '#branding/config/vuetify'

export { createApp }

function createApp(pageContext) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = {
    render() {
      return h(
        pageContext.config.Layout || LayoutDefault,
        {},
        {
          default() {
            return h(Page, pageProps ?? {})
          }
        }
      )
    }
  }

  const app = createSSRApp(PageWithLayout)

  // NOTE: Temporarily disabled due to build issues
  // app.use(i18n)
  app.use(vuetify)

  // We make `pageContext` available from any Vue component
  setPageContext(app, pageContext)

  return app
}
