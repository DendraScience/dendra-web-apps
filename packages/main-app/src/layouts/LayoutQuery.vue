<template>
  <v-app>
    <v-app-bar border="b" color="brand-surface" flat theme="dark">
      <router-link :to="{ name: 'home' }">
        <v-avatar :image="logoColor" class="mx-4" size="42"
      /></router-link>

      <v-app-bar-nav-icon
        v-if="$vuetify.display.smAndDown"
        @click="toggleDrawer()"
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

    <QueryDrawer v-if="$vuetify.display.smAndDown" v-model="drawer" />

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
import { computed, ref } from 'vue'
import { useToggle } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useGlobalState } from '#common/composables/useGlobalState'
import logoColor from '#common/assets/site-logomark-color.svg'

const LOGIN_URL = import.meta.env.VITE_CANOPY_LOGIN_URL

const { t } = useI18n()
const { session } = useGlobalState()

const drawer = ref(null)
const toggleDrawer = useToggle(drawer)

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
