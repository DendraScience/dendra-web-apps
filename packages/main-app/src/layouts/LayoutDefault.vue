<template>
  <v-app>
    <v-app-bar :title="APP_NAME" flat>
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
      <div class="h-100 py-2 px-md-4">
        <slot />
      </div>
    </v-main>

    <FooterSection />
  </v-app>
</template>

<script setup lang="ts">
const APP_NAME = import.meta.env.VITE_APP_NAME
</script>
