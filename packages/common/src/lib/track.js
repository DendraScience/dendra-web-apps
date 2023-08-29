export class Tracker {
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
