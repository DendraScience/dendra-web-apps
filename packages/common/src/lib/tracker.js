/**
 * @typedef { import("vike/types").PageContextClient } PageContext
 * @typedef { import("pino").Logger } Logger
 */

import Plausible from 'plausible-tracker'
import { logger } from './logger'

/**
 * @typedef {object} TrackerOptions
 * @property {DataLayer} [dataLayer]
 * @property {boolean} dev
 * @property {function} [gtag]
 * @property {Logger} [logger]
 * @property {PlausibleReturn} [plausible]
 */

class Tracker {
  /**
   * @param  {TrackerOptions} [options]
   */
  constructor(options = { dev: false }) {
    this.dataLayer = options.dataLayer
    this.dev = options.dev
    this.gtag = options.gtag
    this.logger = options.logger
    this.plausible = options.plausible
  }

  /**
   * @param  {string} event
   * @param  {{[propName: string]: string | number | boolean}=} props
   */
  event(event, props = {}) {
    const { dev, gtag, logger, plausible } = this

    if (!event) return
    if (dev && logger) logger.info({ event, props }, 'Track event')
    if (plausible) plausible.trackEvent(event, { props })
    if (gtag) gtag('event', event, props)
  }

  /**
   * @param  {PageContext | {canonicalPaths: CanonicalPaths, headProps: HeadProps}} pageContext
   */
  pageView({ canonicalPaths, headProps }) {
    const { dev, gtag, logger, plausible } = this

    if (
      dev &&
      logger &&
      canonicalPaths &&
      canonicalPaths.relative &&
      headProps &&
      headProps.title
    )
      logger.info(
        { title: headProps.title, url: canonicalPaths.relative },
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
      headProps &&
      headProps.title
    )
      gtag('event', 'page_view', {
        page_location: canonicalPaths.absolute,
        page_title: headProps.title
      })
  }
}

/** @type {PlausibleReturn | undefined} */
let plausible
/** @type {function | undefined} */
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
      gtag,
      logger,
      plausible
    })
  : new Tracker()
