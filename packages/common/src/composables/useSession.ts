import { useQuery } from '@tanstack/vue-query'
import { createSharedComposable } from '@vueuse/core'
import { createClient } from '@connectrpc/connect'
import { SessionService } from '@buf/dendrascience_api.bufbuild_es/dendra/api/auth/v3alpha1/service_pb'
import { transport } from '#common/lib/dendra-v3'

const sessionServiceClient = createClient(SessionService, transport)

function useSession() {
  const queryKey = ['session']
  return useQuery({
    retry: 1,
    queryKey,
    queryFn: async () => {
      const resp = await sessionServiceClient.getCurrentSession({})
      return resp.session
    }
  })
}

export const useSharedSession = createSharedComposable(useSession)
