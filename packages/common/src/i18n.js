import { createI18n } from 'vue-i18n'
// import datetimeFormats from '#branding/locales/datetimeFormats'
// import numberFormats from '#branding/locales/numberFormats'
import messages from '#branding/locales/messages'

export default createI18n({
  allowComposition: true,
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: 'en',
  fallbackLocale: 'en',
  // datetimeFormats,
  // numberFormats,
  messages
})
