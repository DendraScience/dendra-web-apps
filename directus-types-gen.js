import 'dotenv/config'
import { writeFile } from 'node:fs/promises'
import Pino from 'pino'
import openapiTS, { astToString } from 'openapi-typescript'

const logger = Pino({
  level: 'info'
})

// SEE: https://github.com/elierotenberg/directus-typescript-gen
async function generate() {
  const resp = await fetch(
    new URL('/server/specs/oas', process.env.DIRECTUS_URL + ''),
    {
      headers: {
        Authorization: `Bearer ${process.env.DIRECTUS_STATIC_TOKEN}`,
        'Content-Type': 'application/json'
      }
    }
  )

  if (!resp.ok) {
    throw new Error(`Non-success status returned: ${resp.status}`)
  }
  const spec = await resp.json()

  const ast = await openapiTS(spec)
  const source = astToString(ast)

  //
  // NOTE: OpenAPI types only -- manually define DirectusSchema
  //

  // source += `\n\nexport type GeneratedSchema = {\n`

  // if (spec.paths) {
  //   for (const [path, pathItem] of Object.entries(spec.paths)) {
  //     const collectionPathPattern = /^\/items\/(?<collection>[a-zA-Z0-9_]+)$/
  //     const collection =
  //       collectionPathPattern.exec(path)?.groups?.[`collection`]

  //     if (typeof collection !== `string` || collection.length === 0) {
  //       continue
  //     }

  //     if (
  //       `get` in pathItem &&
  //       `responses` in pathItem.get &&
  //       `200` in pathItem.get.responses &&
  //       `content` in pathItem.get.responses[`200`] &&
  //       `application/json` in pathItem.get.responses[`200`].content &&
  //       `schema` in pathItem.get.responses[`200`].content[`application/json`] &&
  //       `properties` in
  //         pathItem.get.responses[`200`].content[`application/json`].schema &&
  //       `data` in
  //         pathItem.get.responses[`200`].content[`application/json`].schema
  //           .properties &&
  //       `items` in
  //         pathItem.get.responses[`200`].content[`application/json`].schema
  //           .properties[`data`] &&
  //       `$ref` in
  //         pathItem.get.responses[`200`].content[`application/json`].schema
  //           .properties[`data`].items
  //     ) {
  //       const $ref =
  //         pathItem.get.responses[`200`].content[`application/json`].schema
  //           .properties[`data`].items.$ref
  //       const refPattern = /^#\/components\/schemas\/(?<ref>[a-zA-Z0-9_]+)$/
  //       const ref = refPattern.exec($ref)?.groups?.[`ref`]

  //       if (typeof ref !== `string` || ref.length === 0) {
  //         continue
  //       }

  //       source += `  ${collection}: components["schemas"]["${ref}"][];\n`
  //     }
  //   }
  // }

  // source += `};\n`

  logger.info('Writing source file')

  await writeFile(`packages/common/src/types/directus.d.ts`, source)

  logger.info('Generate done!')
}

logger.info('Generating Directus types...')

generate().catch(err => {
  console.log(err)
})
