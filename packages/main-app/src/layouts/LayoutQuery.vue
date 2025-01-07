<template>
  <v-app>
    <v-app-bar border="b" color="brand-surface" flat theme="dark">
      <router-link :to="{ name: 'home' }">
        <v-avatar :image="logoColor" class="mx-4" size="42"
      /></router-link>

      <v-app-bar-nav-icon
        v-if="$vuetify.display.smAndDown"
        @click="toggleNavDrawer()"
      />

      <template v-else>
        <v-btn
          v-for="(item, i) in items"
          :key="i"
          class="mx-1 text-none"
          height="50"
          rounded="0"
          v-bind="item"
        />
      </template>

      <v-spacer />

      <template #append>
        <div class="d-flex ga-2 align-center">
          <BreakpointName />
          <ToggleDarkButton />
          <HelpMenuButton />
          <AccountMenuButton />
        </div>
      </template>
    </v-app-bar>

    <QueryDrawer v-if="$vuetify.display.smAndDown" v-model="navDrawer" />

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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGlobalState } from '#common/composables/global'
import {
  useProvideOverlay,
  useOverlayOrThrow
} from '#common/composables/overlay'
import logoColor from '#common/assets/site-logomark-color.svg'

const LOGIN_URL = import.meta.env.VITE_CANOPY_LOGIN_URL

useProvideOverlay()

const { t } = useI18n()
const { session } = useGlobalState()
const { navDrawer, toggleNavDrawer } = useOverlayOrThrow()

const items = computed(() => {
  return [
    {
      text: t('query_links.status'),
      to: { name: 'status' }
    },
    {
      text: t('query_links.query'),
      to: { name: 'query' }
    },
    {
      text: t('query_links.download'),
      to: { name: 'download' }
    },
    {
      text: t('query_links.home'),
      to: { name: 'home' }
    },
    {
      href: LOGIN_URL,
      text: t('query_links.login'),
      hidden: !!session.value
    }
  ].filter(item => !item.hidden)
})
</script>
