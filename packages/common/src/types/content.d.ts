import { components } from './directus'

export type DirectusSchema = {
  ctas: components['schemas']['ItemsCtas'][]
  meta_infos: components['schemas']['ItemsMetaInfos'][]
  section_hero_ctas: components['schemas']['ItemsSectionHeroCtas'][]
  section_hero: components['schemas']['ItemsSectionHero'][]
  image_transformations: components['schemas']['ItemsImageTransformations'][]
  static_pages_sections: components['schemas']['ItemsStaticPagesSections'][]
  section_differentiators: components['schemas']['ItemsSectionDifferentiators'][]
  differentiators: components['schemas']['ItemsDifferentiators'][]
  static_pages: components['schemas']['ItemsStaticPages'][]
  section_capabilities: components['schemas']['ItemsSectionCapabilities'][]
  section_capabilities_capabilities: components['schemas']['ItemsSectionCapabilitiesCapabilities'][]
  capabilities: components['schemas']['ItemsCapabilities'][]
  section_differentiators_differentiators: components['schemas']['ItemsSectionDifferentiatorsDifferentiators'][]
  case_studies: components['schemas']['ItemsCaseStudies'][]
  tours: components['schemas']['ItemsTours'][]
  section_case_studies_case_studies: components['schemas']['ItemsSectionCaseStudiesCaseStudies'][]
  section_tours: components['schemas']['ItemsSectionTours'][]
  section_case_studies: components['schemas']['ItemsSectionCaseStudies'][]
  section_tours_tours: components['schemas']['ItemsSectionToursTours'][]
  tours_ctas: components['schemas']['ItemsToursCtas'][]
}
