import { createDirectus } from '@directus/sdk'
import { graphql } from '@directus/sdk/graphql'
import { rest } from '@directus/sdk/rest'
import { staticToken } from '@directus/sdk'

export const directusClient = createDirectus(import.meta.env.VITE_DIRECTUS_URL)
  .with(graphql())
  .with(rest())
  .with(staticToken(import.meta.env.VITE_DIRECTUS_STATIC_TOKEN))
