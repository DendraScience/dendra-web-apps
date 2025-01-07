<template>
  <v-app>
    <ManagementDrawer v-model="navDrawer" />

    <v-app-bar title="Dendra Management" border="b" flat>
      <template #prepend>
        <v-app-bar-nav-icon @click="toggleNavDrawer()" />
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

    <SmallSideDrawer v-model="smallSideDrawer" />
    <LargeSideDrawer v-model="largeSideDrawer" />

    <v-main>
      <div class="h-100 py-2 px-md-4">
        <slot />
      </div>
    </v-main>

    <FooterSection />
  </v-app>
</template>

<script setup lang="ts">
import {
  useProvideOverlay,
  useOverlayOrThrow
} from '#common/composables/overlay'

useProvideOverlay()

const { largeSideDrawer, smallSideDrawer, navDrawer, toggleNavDrawer } =
  useOverlayOrThrow()
</script>
