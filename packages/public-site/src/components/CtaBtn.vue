<template>
  <v-btn :aria-label="action">{{ action }}</v-btn>
</template>

<script setup>
defineProps({
  action: {
    default: 'Action',
    type: String
  },
  title: {
    default: undefined,
    type: String
  }
})
</script>
