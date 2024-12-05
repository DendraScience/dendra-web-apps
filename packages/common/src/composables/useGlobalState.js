/**
 * @import { Session } from '@buf/dendrascience_api.bufbuild_es/dendra/api/auth/v3alpha1/types_pb'
 */

import { ref } from 'vue'
import { createGlobalState } from '@vueuse/core'

export const useGlobalState = createGlobalState(() => {
  const session = ref(/** @type {Session | undefined} */ (undefined))

  function clearSession() {
    session.value = undefined
  }

  /**
   * @param  {Session} [value]
   */
  function setSession(value) {
    session.value = value
  }

  return {
    clearSession,
    session,
    setSession
  }
})
