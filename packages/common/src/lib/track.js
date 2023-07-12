export class Tracker {
  constructor(options) {
    Object.assign(this, options)
  }

  event(event, props) {
    const { dataLayer, dev, logger, plausable } = this

    if (dev && logger) logger.info({ event, props }, 'Track event')
    if (plausable) plausable.trackEvent(event, { props })
    if (dataLayer) dataLayer.push({ event, ...props })
  }

  async getGAClientId() {
    // Try 5 times, 400ms sleep between tries = max 2s wait
    for (let i = 0; i < 5; i++) {
      const gaName = window.GoogleAnalyticsObject || 'ga'
      const ga = window[gaName]

      if (ga && typeof ga.getAll === 'function') {
        const trackers = ga.getAll()
        if (trackers.length) return trackers[0].get('clientId')
      }

      await new Promise(resolve => setTimeout(resolve, 400))
    }

    // Timed out
    throw new Error('getGAClientId timed out')
  }

  pageView({ canonicalPaths, title }) {
    const { dataLayer, dev, logger, plausable } = this

    if (dev && logger)
      logger.info({ title, url: canonicalPaths.relative }, 'Track pagevew')
    if (plausable)
      plausable.trackPageview({
        url: canonicalPaths.absolute
      })
    if (dataLayer)
      dataLayer.push({
        event: 'pageView',
        pagePath: canonicalPaths.relative,
        pageTitle: title
      })
  }
}
