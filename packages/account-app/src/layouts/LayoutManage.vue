<template>
  <v-app>
    <ManagementDrawer v-model="drawer" />

    <v-app-bar title="Dendra Management" border="b" flat>
      <template #prepend>
        <v-app-bar-nav-icon @click="toggleDrawer()" />
      </template>

      <template #append>
        <div class="d-flex ga-2 align-center">
          <BreakpointName />
          <ToggleDarkButton />
          <HelpMenuButton />
          <AccountMenuButton />
        </div>
      </template>
    </v-app-bar>

    <NotifySnackbar />

    <v-main>
      <div class="fill-height py-2 px-md-4">
        <slot />
      </div>
    </v-main>

    <FooterSection />
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'

const drawer = ref(null)
const toggleDrawer = useToggle(drawer)
</script>
