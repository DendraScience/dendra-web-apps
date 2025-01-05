<template>
  <v-menu :close-on-content-click="false">
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        :prepend-icon="mdiFormatColumns"
        :text="t('button_text.columns')"
        border
        class="text-none ma-1"
        color="medium-emphasis"
        slim
        variant="flat"
      />
    </template>

    <v-list bg-color="surface-light" density="compact" max-height="400" slim>
      <slot />
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { mdiFormatColumns } from '@mdi/js'

const { t } = useI18n()
</script>
