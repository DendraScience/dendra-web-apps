<template>
  <v-card class="pa-sm-4" color="surface-light" flat rounded="xl">
    <template #append>
      <v-avatar :icon="mdiArrowRight" variant="tonal"></v-avatar>
    </template>

    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { mdiArrowRight } from '@mdi/js'
</script>
