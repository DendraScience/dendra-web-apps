import { de as deVuetify, en as enVuetify } from 'vuetify/locale'
import deCustom from './de'
import enCustom from './en'
import defaultsDeep from 'lodash.defaultsdeep'

export default {
  de: defaultsDeep({}, deCustom, { $vuetify: deVuetify }),
  en: defaultsDeep({}, enCustom, { $vuetify: enVuetify })
}
