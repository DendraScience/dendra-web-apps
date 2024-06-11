<template>
  <template v-if="staticPage.sections && staticPage.sections.length">
    <template v-for="section of staticPage.sections" :key="section.id">
      <template v-if="typeof section === 'number'" />

      <PageSection
        v-else-if="section.collection && typeof section.item !== 'string'"
        :collection="section.collection"
        :item="/** @type {object} **/ (section.item)"
      />
    </template>
  </template>
</template>

<script>
/**
 * @typedef { import("#common/types/directus").components["schemas"]["ItemsStaticPages"] } StaticPage
 * @typedef { import("#common/types/directus").components["schemas"]["ItemsStaticPagesSections"] } ItemsStaticPagesSections
 * @typedef { import('vue').PropType<StaticPage> } StaticPagePropType
 */
</script>

<script setup>
defineProps({
  staticPage: {
    required: true,
    /** @type {StaticPagePropType} */
    type: Object
  }
})
</script>
