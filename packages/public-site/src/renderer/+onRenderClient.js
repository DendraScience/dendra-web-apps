import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

import { tracker } from './tracker'
import { createApp } from './app'

export default onRenderClient

async function onRenderClient(pageContext) {
  const app = createApp(pageContext)

  tracker.pageView(pageContext)

  app.mount('#app')
}
