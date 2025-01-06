<template>
  <v-menu :close-on-content-click="false">
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        :prepend-icon="isFiltered ? mdiFilterCheck : mdiFilterCogOutline"
        :text="t('button_text.filters')"
        border
        class="text-none ma-1"
        color="medium-emphasis"
        slim
        variant="flat"
      />
    </template>

    <v-card color="surface-light" max-width="400">
      <v-card-text>
        <slot />
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { mdiFilterCheck, mdiFilterCogOutline } from '@mdi/js'

defineProps<{
  isFiltered?: boolean
}>()

const { t } = useI18n()
</script>
