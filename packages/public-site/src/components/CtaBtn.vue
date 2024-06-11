<template>
  <v-btn
    :aria-label="value.action"
    :href="typeof value.href === 'string' ? value.href : undefined"
    >{{ value.action }}</v-btn
  >
</template>

<script>
/**
 * @typedef { import("#common/types/directus").components["schemas"]["ItemsCtas"] } ItemsCtas
 * @typedef { import('vue').PropType<ItemsCtas> } ItemsCtasPropType
 */
</script>

<script setup>
defineProps({
  value: {
    required: true,
    /** @type {ItemsCtasPropType} */
    type: Object
  }
})
</script>
