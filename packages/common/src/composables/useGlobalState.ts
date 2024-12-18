import type { Session } from '@buf/dendrascience_api.bufbuild_es/dendra/api/auth/v3alpha1/types_pb'
import { ref, shallowRef } from 'vue'
import { createGlobalState } from '@vueuse/core'
import { createClient } from '@connectrpc/connect'
import { SessionService } from '@buf/dendrascience_api.bufbuild_es/dendra/api/auth/v3alpha1/service_pb'
import { transport } from '#common/lib/dendra-v3'

export const useGlobalState = createGlobalState(() => {
  const client = createClient(SessionService, transport)
  const session = shallowRef<Session>()

  async function fetchSession() {
    session.value = undefined
    const resp = await client.getCurrentSession({})
    session.value = resp.session
    return resp.session
  }

  return {
    fetchSession,
    session
  }
})
