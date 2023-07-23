export default {
  clientRouting: true,
  meta: {
    documentProps: {
      env: 'server-and-client'
    },
    Layout: {
      env: 'server-and-client'
    }
  },
  passToClient: [
    'canonicalPaths',
    'documentProps',
    'pageProps'
    // [vite-plugin-ssr][Warning] `pageContext.urlPathname` is already available
    // in the browser when using Client Routing; including `urlPathname`
    // in `passToClient` has no effect.
    // 'urlPathname'
  ],
  prefetchStaticAssets: 'viewport'
}
