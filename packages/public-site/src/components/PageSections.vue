<template>
  <PageSection
    v-for="section of staticPage.sections"
    :key="section.id"
    :collection="section.collection"
    :item="section.item"
    class="mb-16"
  />
</template>

<script setup>
defineProps({
  staticPage: {
    required: true,
    type: Object
  }
})
</script>
