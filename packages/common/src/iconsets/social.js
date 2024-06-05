/**
 * @typedef { import("vuetify").IconSet } IconSet
 */

import { defineAsyncComponent, h } from 'vue'

// SEE: https://simpleicons.org/
/** @type {IconSet} */
const social = {
  component: props => {
    const { icon, ...rest } = props
    return h(props.tag, rest, [
      h(
        defineAsyncComponent(() => import(`./social/${icon}.vue`)),
        { class: 'v-icon__svg' }
      )
    ])
  }
}

export { social }
