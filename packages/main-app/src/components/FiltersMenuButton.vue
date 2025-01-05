<template>
  <v-menu :close-on-content-click="false">
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        :prepend-icon="mdiFilterCog"
        :text="t('button_text.filters')"
        border
        class="text-none ma-1"
        color="medium-emphasis"
        slim
        variant="flat"
      />
    </template>

    <v-card max-width="400">
      <v-card-text>
        <slot />
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { mdiFilterCog } from '@mdi/js'

const { t } = useI18n()
</script>
