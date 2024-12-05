import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'
import '@fontsource-variable/material-symbols-outlined'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from '#common/lib/i18n'
import vuetify from '#branding/config/vuetify'
import router from '#root/router'
import { registerLayouts } from '#root/layouts/register'

const app = createApp(App)

registerLayouts(app)

app.use(router).use(i18n).use(vuetify).mount('#app')
