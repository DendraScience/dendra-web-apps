export default {
  meta: {
    headProps: {
      env: { server: true, client: false }
    },
    getHeadProps: {
      env: { server: true, client: false }
    },
    structuredData: {
      env: { server: true, client: false }
    },
    getStructuredData: {
      env: { server: true, client: false }
    },
    ogProps: {
      env: { server: true, client: false }
    },
    getOGProps: {
      env: { server: true, client: false }
    },
    staticPageID: {
      env: { server: true, client: false }
    },
    Layout: {
      env: { server: true, client: true }
    }
  },
  passToClient: ['canonicalPaths', 'headProps', 'urlPathname']
}
