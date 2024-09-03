// `usePageContext` allows us to access `pageContext` in any Vue component.
// SEE: https://vike.com/pageContext-anywhere

/**
 * @typedef { import("vue").App } App
 * @typedef { import("vike/types").PageContext } PageContext
 */

import { inject } from 'vue'

const key = Symbol()

export function usePageContext() {
  return inject(key)
}

/**
 * @param  {App} app
 * @param  {PageContext} pageContext
 */
export function setPageContext(app, pageContext) {
  app.provide(key, pageContext)
}
