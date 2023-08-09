<template>
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <v-fade-transition leave-absolute>
        <component :is="Component" />
      </v-fade-transition>
    </router-view>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const layout = computed(() => {
  const l = route?.meta?.layout
  return l ? `Layout${l}` : 'LayoutDefault'
})
</script>
