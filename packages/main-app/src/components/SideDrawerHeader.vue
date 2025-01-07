<template>
  <v-card-item class="position-sticky top-0 bg-brand-surface py-4">
    <template #append>
      <v-btn
        :icon="mdiClose"
        class="mt-n4"
        variant="text"
        @click="emit('close')"
      />
    </template>
  </v-card-item>
</template>
<script setup lang="ts">
import { mdiClose } from '@mdi/js'

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>
