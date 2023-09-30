// `usePageContext` allows us to access `pageContext` in any Vue component.
// SEE: https://vike.com/pageContext-anywhere

import { inject } from 'vue'

const key = Symbol()

export function usePageContext() {
  return inject(key)
}

export function setPageContext(app, pageContext) {
  app.provide(key, pageContext)
}
