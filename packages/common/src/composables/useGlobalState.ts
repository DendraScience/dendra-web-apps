import type { Session } from '@buf/dendrascience_api.bufbuild_es/dendra/api/auth/v3alpha1/types_pb'
import { ref } from 'vue'
import { createGlobalState } from '@vueuse/core'

export const useGlobalState = createGlobalState(() => {
  const session = ref<Session | undefined>()

  function clearSession() {
    session.value = undefined
  }

  function setSession(value: Session) {
    session.value = value
  }

  return {
    clearSession,
    session,
    setSession
  }
})
