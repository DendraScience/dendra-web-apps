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
                  ],
                  section_differentiators: [
                    'title',
                    'paragraph',
                    {
                      differentiators: [
                        {
                          differentiators_id: ['description', 'icon', 'title']
                        }
                      ]
                    }
                  ],
                  section_tours: [
                    'title',
                    'paragraph',
                    {
                      tours: [
                        {
                          tours_id: [
                            'description',
                            'title',
                            {
                              ctas: [
                                {
                                  ctas_id: ['action', 'href', 'title']
                                }
                              ]
                            }
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
          case 'section_differentiators':
            if (section.item?.differentiators) {
              for (const differentiator of section.item.differentiators) {
                if (differentiator.differentiators_id?.description) {
                  differentiator.differentiators_id.description = md.render(
                    differentiator.differentiators_id.description
                  )
                }
              }
            }
            break
          case 'section_tours':
            if (section.item?.tours) {
              for (const tour of section.item.tours) {
                if (tour.tours_id?.description) {
                  tour.tours_id.description = md.render(
                    tour.tours_id.description
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
