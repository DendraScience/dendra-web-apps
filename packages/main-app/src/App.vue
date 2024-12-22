<template>
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <v-fade-transition leave-absolute>
          <Suspense>
            <component :is="Component" :key="route.path" />

            <template #fallback>
              <LoadingProgress />
            </template>
          </Suspense>
        </v-fade-transition>
      </template>

      <template v-else>
        <LoadingProgress />
      </template>
    </router-view>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const layout = computed(() => {
  const l = route?.meta?.layout
  return l ? `Layout${l}` : 'LayoutDefault'
})
</script>
