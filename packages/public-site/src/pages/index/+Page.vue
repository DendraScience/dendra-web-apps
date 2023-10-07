<template>
  <div v-once>
    <PageSections v-bind="props" />
  </div>
</template>

<script setup>
const props = defineProps({
  staticPage: {
    required: true,
    type: Object
  }
})
</script>
