import { type EventBusKey, useEventBus } from '@vueuse/core'

export interface Notification {
  error?: Error
  message: string
  type: 'success' | 'info' | 'warning' | 'error'
}

export const notifyKey: EventBusKey<Notification> = Symbol('notify-key')

export function useNotify() {
  const notifyBus = useEventBus(notifyKey)

  function notify(n: Error | Notification) {
    if (n instanceof Error) {
      notifyBus.emit({
        error: n,
        message: n.message,
        type: 'error'
      })
    } else {
      notifyBus.emit(n)
    }
  }

  return {
    notify,
    notifyBus
  }
}
