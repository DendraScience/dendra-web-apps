import { createConnectTransport } from '@connectrpc/connect-web'

export const transport = createConnectTransport({
  baseUrl: import.meta.env.VITE_DENDRA_RPC_API_V3_URL,
  fetch: (input, init) => fetch(input, { ...init, credentials: 'include' })
})
