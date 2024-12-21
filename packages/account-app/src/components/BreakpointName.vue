<template>
  <v-lazy>
    <div v-if="isDev" class="bg-secondary pa-2 mr-2">
      {{ breakpointName }}
    </div>
  </v-lazy>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const isDev = import.meta.env.DEV
const { name: breakpointName } = useDisplay()
</script>
