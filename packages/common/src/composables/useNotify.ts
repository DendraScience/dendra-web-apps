import type { EventBusKey } from '@vueuse/core'
import { useEventBus } from '@vueuse/core'

interface Notification {
  message: string
  type: 'success' | 'info' | 'warning' | 'error'
}

export const notifyKey: EventBusKey<Error | Notification> = Symbol('notify-key')

export function useNotify() {
  const notifyBus = useEventBus(notifyKey)

  function notify(n: Error | Notification) {
    notifyBus.emit(n)
  }

  return {
    notify,
    notifyBus
  }
}
