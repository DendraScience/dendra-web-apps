import { createI18n } from 'vue-i18n'
import { en as enVuetifyLocale } from 'vuetify/locale'
// import datetimeFormats from '#root/locales/datetimeFormats'
// import numberFormats from '#root/locales/numberFormats'
import enCustom from '#root/locales/custom/en.json'
import enVuetify from '#root/locales/vuetify/en.json'

const messages = {
  en: {
    ...enCustom,
    $vuetify: {
      ...enVuetifyLocale,
      ...enVuetify
    }
  }
}

export default createI18n({
  allowComposition: true,
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: 'en',
  fallbackLocale: 'en',
  // datetimeFormats,
  // numberFormats,
  messages
})
