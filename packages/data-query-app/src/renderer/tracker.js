import Plausible from 'plausible-tracker'
import { logger } from '#common/lib/log'
import { Tracker } from '#common/lib/track'

let activity
let plausible

// Configure trackers
if (!import.meta.env.SSR) {
  // SEE: https://developers.google.com/tag-platform/tag-manager/web
  window.dataLayer = window.dataLayer || []

  // SEE: https://github.com/plausible/plausible-tracker#readme
  plausible = Plausible({
    domain: import.meta.env.VITE_DOMAIN,
    trackLocalhost: false
  })
}

export const tracker = !import.meta.env.SSR
  ? new Tracker({
      activity,
      dataLayer: window.dataLayer,
      dev: import.meta.env.DEV,
      logger,
      plausible
    })
  : new Tracker()
