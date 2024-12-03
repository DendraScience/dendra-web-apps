import { createConnectTransport } from '@connectrpc/connect-web'

export const transport = createConnectTransport({
  baseUrl: 'http://localhost:8080/rpc',
  fetch: (input, init) => fetch(input, { ...init, credentials: 'include' })
})
