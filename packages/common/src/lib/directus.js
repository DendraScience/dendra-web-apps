import { createDirectus } from '@directus/sdk'
import { graphql } from '@directus/sdk/graphql'
import { rest } from '@directus/sdk/rest'

export const directusClient = createDirectus(import.meta.env.VITE_DIRECTUS_URL)
  .with(graphql())
  .with(rest())
