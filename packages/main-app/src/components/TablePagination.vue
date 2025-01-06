<template>
  <div class="d-flex justify-end align-center ga-2">
    <div class="d-none d-sm-block text-body-2">
      {{ t('table_pagination.items_per_page') }}
    </div>
    <v-select
      v-model="model"
      :items="pageSizeItems"
      class="mr-2"
      density="compact"
      hide-details
      style="max-width: 120px"
      variant="outlined"
    ></v-select>

    <v-btn
      :icon="mdiPageFirst"
      color="high-emphasis"
      density="comfortable"
      variant="text"
      @click="emit('step', 0)"
    />
    <v-btn
      :disabled="isPreviousDisabled"
      :text="t('table_pagination.previous_page')"
      class="text-none"
      color="high-emphasis"
      slim
      variant="text"
      @click="emit('step', -1)"
    />
    <v-btn
      :disabled="isNextDisabled"
      :text="t('table_pagination.next_page')"
      class="text-none"
      color="high-emphasis"
      slim
      variant="text"
      @click="emit('step', 1)"
    />
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { mdiPageFirst } from '@mdi/js'

defineProps<{
  isNextDisabled: boolean
  isPreviousDisabled: boolean
}>()

const emit = defineEmits<{
  (e: 'step', direction: number): void
}>()

const model = defineModel<number>({
  required: true
})

const { t } = useI18n()
const pageSizeItems = shallowRef([15, 100, 500, 1000])
</script>
