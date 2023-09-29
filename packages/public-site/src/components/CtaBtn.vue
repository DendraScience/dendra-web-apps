<template>
  <v-btn v-bind="props">{{ action }}</v-btn>
</template>

<script setup>
//  TODO: alt tag for title
const props = defineProps({
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
