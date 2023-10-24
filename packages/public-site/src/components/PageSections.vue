<template>
  <PageSection
    v-for="(section, i) of staticPage.sections"
    :key="section.id"
    :collection="section.collection"
    :item="section.item"
    :class="
      i > 0 &&
      i < staticPage.sections.length - 1 &&
      FILLED[staticPage.sections[i + 1].collection] &&
      FILLED[section.collection]
        ? 'section-border-bottom'
        : 'mb-8 mb-md-16'
    "
  />
</template>

<script setup>
const FILLED = {
  section_differentiators: true,
  section_tours: true
}

defineProps({
  staticPage: {
    required: true,
    type: Object
  }
})
</script>

<style>
.section-border-bottoms {
  border-bottom: 28px solid red;
}
</style>
