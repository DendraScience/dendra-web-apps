<template>
  <template v-if="staticPage.sections && staticPage.sections.length">
    <template v-for="(section, i) of staticPage.sections" :key="i">
      <template v-if="typeof section === 'number'" />

      <PageSection
        v-else-if="section.collection && typeof section.item !== 'string'"
        :collection="section.collection"
        :item="/** @type {object} **/ (section.item)"
      />
    </template>
  </template>
</template>

<script setup>
/**
 * @import { PropType } from 'vue'
 * @import { components } from '#common/types/directus'
 */

// HACK: To work around https://github.com/vuejs/language-tools/issues/4899
import { defineProps } from 'vue'

defineProps({
  staticPage: {
    required: true,
    /** @type {PropType<components["schemas"]["ItemsStaticPages"]>} */
    type: Object
  }
})
</script>
