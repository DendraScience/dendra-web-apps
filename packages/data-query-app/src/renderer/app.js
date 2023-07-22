import { createSSRApp, h, markRaw, reactive } from 'vue'
import { setPageContext } from './usePageContext'
import LayoutDefault from '#root/layouts/LayoutDefault.vue'
import i18n from './i18n'
import vuetify from './vuetify'

export { createApp }

function createApp(pageContext) {
  const pageContextReactive = reactive(pageContext)

  let rootState

  const PageWithLayout = {
    setup: () => {
      rootState = reactive({
        Page: markRaw(pageContext.Page),
        pageProps: markRaw(pageContext.pageProps || {})
      })
      return rootState
    },
    render() {
      return h(
        pageContext.exports.Layout || LayoutDefault,
        {},
        {
          default: () => {
            return h(this.Page, this.pageProps || {})
          }
        }
      )
    }
  }

  const app = createSSRApp(PageWithLayout)

  app.use(i18n)
  app.use(vuetify)

  app.config.globalProperties.$spa = {
    changePage: pageContextNew => {
      Object.assign(pageContextReactive, pageContextNew)
      rootState.Page = markRaw(pageContextNew.Page)
      rootState.pageProps = markRaw(pageContextNew.pageProps || {})
    }
  }

  // We make `pageContext` available from any Vue component
  setPageContext(app, pageContextReactive)

  return app
}
