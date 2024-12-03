<template>
  <div v-once>
    <PageSections v-bind="props" />
  </div>
</template>

<script setup>
/**
 * @import { PropType } from 'vue'
 * @import { components } from '#common/types/directus'
 */

// HACK: To work around https://github.com/vuejs/language-tools/issues/4899
import { defineProps } from 'vue'

const props = defineProps({
  staticPage: {
    required: true,
    /** @type {PropType<components["schemas"]["ItemsStaticPages"]>} */
    type: Object
  }
})
</script>
