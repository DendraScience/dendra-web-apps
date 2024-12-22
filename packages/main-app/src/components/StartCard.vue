<template>
  <v-card
    class="d-flex flex-column h-100 pa-sm-4"
    color="surface-light"
    flat
    rounded="xl"
  >
    <v-card-text>
      <slot />
    </v-card-text>

    <v-card-actions>
      <v-avatar :icon="mdiArrowRight" class="ml-auto" variant="tonal" />
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { mdiArrowRight } from '@mdi/js'
</script>
