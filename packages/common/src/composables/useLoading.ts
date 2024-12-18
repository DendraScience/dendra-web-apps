import type { EventBusKey } from '@vueuse/core'
import { useEventBus } from '@vueuse/core'

export const loadingKey: EventBusKey<boolean | number> = Symbol('loading-key')

export function useLoading() {
  const loadingBus = useEventBus(loadingKey)

  function loading(v: boolean | number) {
    loadingBus.emit(v)
  }

  return {
    loading,
    loadingBus
  }
}
