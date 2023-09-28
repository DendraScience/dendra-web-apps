export default {
  meta: {
    documentProps: {
      env: 'server-and-client'
    },
    getDocumentProps: {
      env: 'server-only'
    },
    structuredData: {
      env: 'server-only'
    },
    getStructuredData: {
      env: 'server-only'
    },
    ogProps: {
      env: 'server-only'
    },
    getOGProps: {
      env: 'server-only'
    },
    staticPageID: {
      env: 'server-only'
    },
    Layout: {
      env: 'server-and-client'
    }
  },
  passToClient: ['canonicalPaths', 'documentProps', 'pageProps', 'urlPathname']
}
