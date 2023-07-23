export default {
  meta: {
    documentProps: {
      env: 'server-and-client'
    },
    Layout: {
      env: 'server-and-client'
    }
  },
  passToClient: ['canonicalPaths', 'documentProps', 'pageProps', 'urlPathname']
}
