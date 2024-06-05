/**
 * @typedef { import("#common/types/content").DirectusSchema } DirectusSchema
 * @typedef { import("@directus/sdk").DirectusClient<DirectusSchema> } DirectusClient
 * @typedef { import("@directus/sdk").RestClient<DirectusSchema> } RestClient
 */

import { createDirectus, rest } from '@directus/sdk'
import { staticToken } from '@directus/sdk'

/** @type {DirectusClient & RestClient} */
export const directusClient = createDirectus(process.env.DIRECTUS_URL + '')
  .with(rest())
  .with(staticToken(process.env.DIRECTUS_STATIC_TOKEN + ''))
