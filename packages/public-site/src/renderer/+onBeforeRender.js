/**
 * @typedef { import("vike/types").OnBeforeRenderAsync } OnBeforeRender
 */

import { getCanonicalPaths } from './helpers'

export default onBeforeRender

/**
 * @type OnBeforeRender
 */
async function onBeforeRender(pageContext) {
  const canonicalPaths = getCanonicalPaths(pageContext)

  return {
    pageContext: {
      canonicalPaths
    }
  }
}
