import { createPromiseClient } from '@connectrpc/connect'
import { createConnectTransport } from '@connectrpc/connect-web'

import { TokenService } from '@buf/dendrascience_api.connectrpc_es/dendra/api/auth/v3alpha1/service_connect'

const transport = createConnectTransport({
  baseUrl: 'http://localhost:8080',
  credentials: 'include'
})

export const tokenServiceClient = createPromiseClient(TokenService, transport)
