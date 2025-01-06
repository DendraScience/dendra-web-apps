<template>
  <v-text-field
    v-model="model"
    :placeholder="t('filter.search_text')"
    :prepend-inner-icon="mdiMagnify"
    clearable
    density="compact"
    hide-details
    rounded
    variant="outlined"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { mdiMagnify } from '@mdi/js'

const model = defineModel<string | null>({
  required: true
})

const { t } = useI18n()
</script>
