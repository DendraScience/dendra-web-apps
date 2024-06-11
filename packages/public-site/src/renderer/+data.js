/**
 * @typedef { import("vike/types").DataAsync } Data
 * @typedef { import("#common/types/directus").components["schemas"]["ItemsStaticPages"] } ItemsStaticPages
 * @typedef { import("#common/types/directus").components["schemas"]["ItemsSectionCapabilities"] } ItemsSectionCapabilities
 * @typedef { import("#common/types/directus").components["schemas"]["ItemsSectionCaseStudies"] } ItemsSectionCaseStudies
 * @typedef { import("#common/types/directus").components["schemas"]["ItemsSectionDifferentiators"] } ItemsSectionDifferentiators
 * @typedef { import("#common/types/directus").components["schemas"]["ItemsSectionTours"] } ItemsSectionTours
 */

// import { getCanonicalPaths } from './helpers'
import { md } from '#common/lib/markdown'
import { directusClient } from '#common/lib/directus'
import { readItem } from '@directus/sdk'

export default data

const IMAGE = ['filename_disk', 'height', 'storage', 'type', 'width']
const TRANSFORMATION = ['cloudinary_parameters']

/**
 * @type {Data}
 */
async function data(pageContext) {
  if (!pageContext.config?.staticPageID) {
    return {}
  }

  /** @type {ItemsStaticPages} **/
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
              og_image: ['filename_disk', 'height', 'storage', 'type', 'width']
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
                section_case_studies: [
                  'title',
                  'paragraph',
                  {
                    case_studies: [
                      {
                        case_studies_id: [
                          'id',
                          'body',
                          'summary',
                          'title',
                          {
                            cover_image: IMAGE
                          },
                          {
                            cover_transformation: TRANSFORMATION
                          }
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

  //
  // Replace markdown blocks with rendered HTML
  //

  if (staticPage && staticPage.sections) {
    for (const section of staticPage.sections) {
      if (typeof section === 'number') continue

      switch (section.collection) {
        case 'section_capabilities':
          if (section.item && typeof section.item !== 'string') {
            // BUG: OpenAPI spec is wrong -- M2A item is object, not array
            const item = /** @type {ItemsSectionCapabilities} **/ (section.item)
            if (item.capabilities && typeof item.capabilities !== 'number') {
              for (const capability of item.capabilities) {
                if (
                  typeof capability !== 'number' &&
                  capability.capabilities_id &&
                  typeof capability.capabilities_id !== 'number'
                ) {
                  const obj = capability.capabilities_id
                  if (obj.description) {
                    obj.description = md.render(obj.description)
                  }
                }
              }
            }
          }
          break

        case 'section_case_studies':
          if (section.item && typeof section.item !== 'string') {
            // BUG: OpenAPI spec is wrong -- M2A item is object, not array
            const item = /** @type {ItemsSectionCaseStudies} **/ (section.item)
            if (item.case_studies && typeof item.case_studies !== 'number') {
              for (const caseStudy of item.case_studies) {
                if (
                  typeof caseStudy !== 'number' &&
                  caseStudy.case_studies_id &&
                  typeof caseStudy.case_studies_id !== 'number'
                ) {
                  const obj = caseStudy.case_studies_id
                  if (obj.body) {
                    obj.body = md.render(obj.body)
                  }
                }
              }
            }
          }
          break

        case 'section_differentiators':
          if (section.item && typeof section.item !== 'string') {
            // BUG: OpenAPI spec is wrong -- M2A item is object, not array
            const item = /** @type {ItemsSectionDifferentiators} **/ (
              section.item
            )
            if (
              item.differentiators &&
              typeof item.differentiators !== 'number'
            ) {
              for (const differentiator of item.differentiators) {
                if (
                  typeof differentiator !== 'number' &&
                  differentiator.differentiators_id &&
                  typeof differentiator.differentiators_id !== 'number'
                ) {
                  const obj = differentiator.differentiators_id
                  if (obj.description) {
                    obj.description = md.render(obj.description)
                  }
                }
              }
            }
          }
          break

        case 'section_tours':
          if (section.item && typeof section.item !== 'string') {
            // BUG: OpenAPI spec is wrong -- M2A item is object, not array
            const item = /** @type {ItemsSectionTours} **/ (section.item)
            if (item.tours && typeof item.tours !== 'number') {
              for (const tour of item.tours) {
                if (
                  typeof tour !== 'number' &&
                  tour.tours_id &&
                  typeof tour.tours_id !== 'number'
                ) {
                  const obj = tour.tours_id
                  if (obj.description) {
                    obj.description = md.render(obj.description)
                  }
                }
              }
            }
          }
          break
      }
    }
  }

  return {
    staticPage
  }
}
