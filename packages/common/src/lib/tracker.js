import Plausible from 'plausible-tracker'
import { logger } from './logger'

class Tracker {
  constructor(options) {
    Object.assign(this, options)
  }

  event(event, props = {}) {
    const { dev, gtag, logger, plausible } = this

    if (!event) return
    if (dev && logger) logger.info({ event, props }, 'Track event')
    if (plausible) plausible.trackEvent(event, { props })
    if (gtag) gtag('event', event, props)
  }

  pageView({ canonicalPaths, documentProps }) {
    const { dev, gtag, logger, plausible } = this

    if (
      dev &&
      logger &&
      canonicalPaths &&
      canonicalPaths.relative &&
      documentProps &&
      documentProps.title
    )
      logger.info(
        { title: documentProps.title, url: canonicalPaths.relative },
        'Track pagevew'
      )

    if (plausible && canonicalPaths && canonicalPaths.absolute)
      plausible.trackPageview({
        url: canonicalPaths.absolute
      })

    if (
      gtag &&
      canonicalPaths &&
      canonicalPaths.absolute &&
      documentProps &&
      documentProps.title
    )
      gtag('event', 'page_view', {
        page_location: canonicalPaths.absolute,
        page_title: documentProps.title
      })
  }
}

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
