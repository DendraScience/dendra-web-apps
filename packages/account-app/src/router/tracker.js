import Plausible from 'plausible-tracker'
import { logger } from '#common/lib/log'
import { Tracker } from '#common/lib/track'

let plausible
let gtag

// Configure trackers
if (!import.meta.env.SSR) {
  // SEE: https://developers.google.com/analytics/devguides/collection/gtagjs
  const gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID
  if (gaTrackingId) {
    window.dataLayer = window.dataLayer ?? []
    gtag = function () {
      window.dataLayer.push(arguments)
    }

    gtag('js', new Date())
    gtag('config', gaTrackingId, { send_page_view: false })
  }

  // SEE: https://github.com/plausible/plausible-tracker#readme
  plausible = Plausible({
    domain: import.meta.env.VITE_DOMAIN,
    trackLocalhost: false
  })
}

export const tracker = !import.meta.env.SSR
  ? new Tracker({
      dataLayer: window.dataLayer,
      dev: import.meta.env.DEV,
      logger,
      plausible
    })
  : new Tracker()
