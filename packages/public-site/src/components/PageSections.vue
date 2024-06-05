<template>
  <PageSection
    v-for="(section, i) of sections"
    :key="section.id"
    :collection="section.collection"
    :item="section.item"
    :class="
      i > 0 &&
      i < sections.length - 1 &&
      FILLED.includes(sections[i + 1].collection + '') &&
      FILLED.includes(section.collection + '')
        ? 'section-border-bottom'
        : 'mb-8 mb-md-16'
    "
  />
</template>

<script>
/**
 * @typedef { import("#common/types/directus").components["schemas"]["ItemsStaticPages"] } StaticPage
 * @typedef { import("#common/types/directus").components["schemas"]["ItemsStaticPagesSections"] } ItemsStaticPagesSections
 * @typedef { import('vue').PropType<StaticPage> } StaticPagePropType
 */
</script>

<script setup>
import { computed } from 'vue'

const FILLED = ['section_differentiators', 'section_tours']

const props = defineProps({
  staticPage: {
    required: true,
    /** @type {StaticPagePropType} */
    type: Object
  }
})

const sections = computed(() => {
  if (props.staticPage && props.staticPage.sections) {
    return /** @type {ItemsStaticPagesSections[]} **/ (
      props.staticPage.sections.filter(section => typeof section !== 'number')
    )
  }
  return []
})
</script>
