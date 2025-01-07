<template>
  <v-navigation-drawer
    :id="SMALL_SIDE_DRAWER_ID"
    floating
    location="end"
    temporary
    width="600"
  />
</template>

<script setup lang="ts">
import { SMALL_SIDE_DRAWER_ID } from '#common/composables/overlay'
</script>
