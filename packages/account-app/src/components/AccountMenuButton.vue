<template>
  <v-menu v-if="session">
    <template #activator="{ props: menu }">
      <v-tooltip
        :disabled="menu['aria-expanded'] === 'true'"
        :text="t('tooltips.account_button')"
        location="bottom"
      >
        <template #activator="{ props: tooltip }">
          <v-btn
            :aria-label="t('aria_labels.account_button')"
            :icon="mdiAccount"
            v-bind="mergeProps(menu, tooltip)"
          />
        </template>
      </v-tooltip>
    </template>

    <v-card>
      <v-list v-if="session.profile" bg-color="surface-light">
        <v-list-item
          :title="session.profile.name"
          :subtitle="session.profile.email"
        />
      </v-list>

      <v-divider />

      <v-list density="compact" nav>
        <v-list-item
          :prepend-icon="mdiCogOutline"
          :title="t('menu_item_titles.user_settings')"
          href="/settings"
          link
        />
        <v-list-item
          v-if="LOGOUT_URL"
          :href="LOGOUT_URL"
          :prepend-icon="mdiLogout"
          :title="t('menu_item_titles.logout')"
          link
        />
      </v-list>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { mergeProps } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGlobalState } from '#common/composables/useGlobalState'
import { mdiAccount, mdiCogOutline, mdiLogout } from '@mdi/js'

const LOGOUT_URL = import.meta.env.VITE_CANOPY_LOGOUT_URL

const { t } = useI18n()
const { session } = useGlobalState()
</script>
