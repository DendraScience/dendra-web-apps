import { getCanonicalPaths } from './helpers'
import { md } from '#common/lib/markdown'
import { directusClient } from '#common/lib/directus'
import { readItem } from '@directus/sdk/rest'

export default onBeforeRender

const IMAGE = ['filename_disk', 'height', 'storage', 'type', 'width']
const TRANSFORMATION = ['cloudinary_parameters']

async function onBeforeRender(pageContext) {
  const canonicalPaths = getCanonicalPaths(pageContext)
  const pageProps = {}
  let metaInfo

  if (pageContext.config?.staticPageID) {
    const staticPage = await directusClient.request(
      readItem('static_pages', pageContext.config.staticPageID, {
        fields: [
          {
            meta_info: [
              'title',
              'description',
              'og_title',
              'og_description',
              {
                og_image: IMAGE
              }
            ],
            sections: [
              'collection',
              'id',
              {
                item: {
                  section_hero: [
                    'title',
                    'paragraph',
                    {
                      background_image: IMAGE
                    },
                    {
                      background_transformation: TRANSFORMATION
                    },
                    {
                      ctas: [
                        {
                          ctas_id: ['action', 'href', 'title']
                        }
                      ]
                    }
                  ],
                  section_capabilities: [
                    'title',
                    'paragraph',
                    {
                      capabilities: [
                        {
                          capabilities_id: [
                            'description',
                            'icon',
                            {
                              image: IMAGE
                            },
                            {
                              transformation: TRANSFORMATION
                            },
                            'title'
                          ]
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        ]
      })
    )

    metaInfo = staticPage.meta_info
    delete staticPage.meta_info

    if (staticPage.sections) {
      for (const section of staticPage.sections) {
        switch (section.collection) {
          case 'section_capabilities':
            if (section.item?.capabilities) {
              for (const capability of section.item.capabilities) {
                if (capability.capabilities_id?.description) {
                  capability.capabilities_id.description = md.render(
                    capability.capabilities_id.description
                  )
                }
              }
            }
            break
        }
      }
    }

    pageProps.staticPage = staticPage
  }

  return {
    pageContext: {
      canonicalPaths,
      metaInfo,
      pageProps
    }
  }
}
