<template>
  <component :is="comp" :value="item" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  collection: {
    required: true,
    type: String
  },
  item: {
    required: true,
    type: Object
  }
})

const comp = defineAsyncComponent(
  () => import(`./sections/${props.collection}.vue`)
)
</script>
