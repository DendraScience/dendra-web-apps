<template>
  <v-navigation-drawer
    color="brand-surface"
    location="top"
    temporary
    theme="dark"
  >
    <v-list class="py-0" slim>
      <v-list-item
        :prepend-icon="mdiCheckCircle"
        :title="t('query_links.status')"
        :to="{ name: 'status' }"
        link
      />
      <v-list-item
        :prepend-icon="mdiChartMultiple"
        :title="t('query_links.query')"
        :to="{ name: 'query' }"
        link
      />
      <v-list-item
        :prepend-icon="mdiDownload"
        :title="t('query_links.download')"
        :to="{ name: 'download' }"
        link
      />
      <v-list-item
        :prepend-icon="mdiRocketLaunch"
        :title="t('query_links.home')"
        :to="{ name: 'home' }"
        link
      />
      <v-list-item
        v-if="!session"
        :href="LOGIN_URL"
        :prepend-icon="mdiLogin"
        :title="t('query_links.login')"
        link
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useGlobalState } from '#common/composables/useGlobalState'
import {
  mdiChartMultiple,
  mdiCheckCircle,
  mdiDownload,
  mdiLogin,
  mdiRocketLaunch
} from '@mdi/js'

const LOGIN_URL = import.meta.env.VITE_CANOPY_LOGIN_URL

const { t } = useI18n()
const { session } = useGlobalState()
</script>
