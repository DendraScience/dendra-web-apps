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

    <EditDrawer v-model="edit" />

    <v-main>
      <div class="h-100">
        <slot />
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'

const drawer = ref(null)
const edit = ref(true)
const toggleDrawer = useToggle(drawer)
// const toggleEdit = useToggle(edit)
</script>
