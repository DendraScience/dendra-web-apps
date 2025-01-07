<template>
  <v-navigation-drawer
    :id="LARGE_SIDE_DRAWER_ID"
    floating
    location="end"
    temporary
    width="800"
  />
</template>

<script setup lang="ts">
import { LARGE_SIDE_DRAWER_ID } from '#common/composables/overlay'
</script>
