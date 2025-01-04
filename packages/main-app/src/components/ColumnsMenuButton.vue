<template>
  <v-menu :close-on-content-click="false">
    <template #activator="{ props: menu }">
      <v-tooltip
        :disabled="menu['aria-expanded'] === 'true'"
        :text="t('tooltips.columns_button')"
        location="bottom"
      >
        <template #activator="{ props: tooltip }">
          <v-btn
            v-bind="mergeProps(menu, tooltip)"
            :aria-label="t('aria_labels.columns_button')"
            :icon="mdiFormatColumns"
            class="ma-1"
            color="on-surface"
            density="comfortable"
            variant="text"
          />
        </template>
      </v-tooltip>
    </template>

    <v-card max-width="400">
      <v-card-text>
        <slot />
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { mergeProps } from 'vue'
import { useI18n } from 'vue-i18n'
import { mdiFormatColumns } from '@mdi/js'

const { t } = useI18n()
</script>
