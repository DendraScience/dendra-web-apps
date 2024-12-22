// Styles
// import 'vuetify/lib/styles/main.sass'
import 'vuetify/styles'
import './styles.scss'
// Vuetify
import { createVuetify } from 'vuetify'
import { md2 } from 'vuetify/blueprints'
import * as directives from 'vuetify/lib/directives/index.mjs'
import { dendra } from '#common/config/themes'
// https://pictogrammers.github.io/@mdi/font/7.0.96/
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mso } from '#common/iconsets/mso.js'
import { social } from '#common/iconsets/social.js'
import '#common/iconsets/mso.css'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { useI18n } from 'vue-i18n'
import i18n from '#root/config/i18n'

export default createVuetify({
  blueprint: md2,

  directives,

  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
      mso,
      social
    }
  },

  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n })
  },

  theme: dendra
})
