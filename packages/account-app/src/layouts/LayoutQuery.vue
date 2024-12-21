<template>
  <v-app>
    <v-app-bar border="b" class="pl-4" flat>
      <router-link :to="{ name: 'home' }">
        <v-avatar :image="logoColor" class="me-sm-6" size="42"
      /></router-link>

      <template v-if="$vuetify.display.mdAndUp">
        <v-btn
          v-for="(item, i) in items"
          :key="i"
          class="me-3 text-none"
          slim
          v-bind="item"
        />
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
  </v-app>
</template>

<script setup lang="ts">
import logoColor from '#branding/assets/site-logomark-color.svg'

const items = [
  {
    text: 'Status',
    to: { name: 'status' }
  },
  {
    text: 'Query',
    to: { name: 'query' }
  },
  {
    text: 'Download',
    to: { name: 'download' }
  },
  {
    text: 'Home',
    to: { name: 'home' }
  }
]
</script>
