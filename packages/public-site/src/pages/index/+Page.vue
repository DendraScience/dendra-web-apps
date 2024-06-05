<template>
  <div v-once>
    <PageSections v-bind="props" />
  </div>
</template>

<script>
/**
 * @typedef { import("#common/types/directus").components["schemas"]["ItemsStaticPages"] } StaticPage
 * @typedef { import('vue').PropType<StaticPage> } StaticPagePropType
 */
</script>

<script setup>
const props = defineProps({
  staticPage: {
    required: true,
    /** @type {StaticPagePropType} */
    type: Object
  }
})
</script>
