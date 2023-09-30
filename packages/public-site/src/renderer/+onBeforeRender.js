import { getCanonicalPaths } from './helpers'
import { directusClient } from '#common/lib/directus'
import { readItem } from '@directus/sdk/rest'

export default onBeforeRender

const IMAGE_FIELDS = ['filename_disk', 'height', 'storage', 'type', 'width']

async function onBeforeRender(pageContext) {
  const canonicalPaths = getCanonicalPaths(pageContext)
  const pageProps = {}
  let metaInfo

  if (pageContext.config?.staticPageID) {
    pageProps.staticPage = await directusClient.request(
      readItem('static_pages', pageContext.config.staticPageID, {
        fields: [
          {
            meta_info: [
              'title',
              'description',
              'og_title',
              'og_description',
              {
                og_image: IMAGE_FIELDS
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
                      background_image: IMAGE_FIELDS
                    },
                    {
                      background_transformation: ['cloudinary_parameters']
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
                    {
                      capabilities: [
                        {
                          capabilities_id: [
                            'description',
                            'icon',
                            {
                              image: IMAGE_FIELDS
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

    metaInfo = pageProps.staticPage.meta_info
    delete pageProps.staticPage.meta_info
  }

  return {
    pageContext: {
      canonicalPaths,
      metaInfo,
      pageProps
    }
  }
}
