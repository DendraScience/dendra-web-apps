<template>
  <v-menu>
    <template #activator="{ props: menu }">
      <v-tooltip
        :disabled="menu['aria-expanded'] === 'true'"
        :text="t('tooltips.help_button')"
        location="bottom"
      >
        <template #activator="{ props: tooltip }">
          <v-btn
            v-bind="mergeProps(menu, tooltip)"
            :aria-label="t('aria_labels.help_button')"
            :icon="mdiHelpCircleOutline"
          />
        </template>
      </v-tooltip>
    </template>

    <v-list density="compact" bg-color="surface-light" nav>
      <v-list-item
        v-if="HREF_DOCUMENTATION"
        :append-icon="mdiOpenInNew"
        :href="HREF_DOCUMENTATION"
        :title="t('menu_item_titles.documentation')"
        link
        target="_blank"
      />
      <v-list-item
        v-if="HREF_SYSTEM_STATUS"
        :append-icon="mdiOpenInNew"
        :href="HREF_SYSTEM_STATUS"
        :title="t('menu_item_titles.system_status')"
        link
        target="_blank"
      />
      <v-list-item
        v-if="HREF_SUPPORT"
        :append-icon="mdiOpenInNew"
        :href="HREF_SUPPORT"
        :title="t('menu_item_titles.support')"
        link
        target="_blank"
      />
      <v-list-item
        v-if="HREF_CONTACT"
        :append-icon="mdiOpenInNew"
        :href="HREF_CONTACT"
        :title="t('menu_item_titles.contact')"
        link
        target="_blank"
      />
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { mergeProps } from 'vue'
import { useI18n } from 'vue-i18n'
import { mdiHelpCircleOutline, mdiOpenInNew } from '@mdi/js'

const HREF_CONTACT = import.meta.env.VITE_HREF_CONTACT
const HREF_DOCUMENTATION = import.meta.env.VITE_HREF_DOCUMENTATION
const HREF_SUPPORT = import.meta.env.VITE_HREF_SUPPORT
const HREF_SYSTEM_STATUS = import.meta.env.VITE_HREF_SYSTEM_STATUS

const { t } = useI18n()
</script>
