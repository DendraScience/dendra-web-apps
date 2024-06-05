import Plausible from 'plausible-tracker'

declare global {
  interface CanonicalPaths {
    base: string
    absolute: string
    relative: string
  }
  interface HeadProps {
    description: string
    title: string
    titleFull?: string
    titleTemplate?: string
  }
  interface OGProps {
    description: string
    title: string
    url?: string
  }
  interface Sitemap {
    base: string
    links: {
      changefreq?: string
      lastmode?: date
      url: string
    }[]
  }
  interface StructuredData {
    '@context': string
    '@type': string
    name: string
    description: string
    // TBD
  }

  type DataLayer = unknown[]
  interface Window {
    dataLayer: DataLayer
  }
  type PlausibleReturn = ReturnType<typeof Plausible>

  type GetHeadPropsFunction = (pageContext: PageContext) => HeadProps
  type GetOGPropsFunction = (
    pageContext: PageContextServer,
    headProps: HeadProps
  ) => OGProps
  type GetStructuredDataFunction = (
    pageContext: PageContextServer,
    headProps: HeadProps
  ) => StructuredData

  namespace Vike {
    interface Config {
      headProps?: HeadProps
      getHeadProps?: GetHeadPropsFunction
      structuredData?: StructuredData
      getStructuredData?: GetStructuredDataFunction
      ogProps?: OGProps
      getOGProps?: GetOGPropsFunction
      Layout?: Vue.Component
      staticPageID?: string
    }

    interface PageContext {
      canonicalPaths: CanonicalPaths
      headProps: HeadProps
      sitemap?: Sitemap

      // Refine type of pageContext.Page (it's `unknown` by default)
      Page: () => Vue.Component
    }
  }
}

export {}
