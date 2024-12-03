<template>
  <v-btn
    :aria-label="value.action"
    :href="typeof value.href === 'string' ? value.href : undefined"
    >{{ value.action }}</v-btn
  >
</template>

<script setup>
/**
 * @import { PropType } from 'vue'
 * @import { components } from '#common/types/directus'
 */

// HACK: To work around https://github.com/vuejs/language-tools/issues/4899
import { defineProps } from 'vue'

defineProps({
  value: {
    required: true,
    /** @type {PropType<components["schemas"]["ItemsCtas"]>} */
    type: Object
  }
})
</script>
