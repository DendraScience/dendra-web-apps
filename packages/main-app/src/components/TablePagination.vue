<template>
  <div class="d-flex justify-end align-center ga-2">
    <div class="d-none d-sm-block text-body-2">
      {{ t('table.items_per_page') }}
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
      v-if="stepToPage"
      :icon="mdiPageFirst"
      color="high-emphasis"
      density="comfortable"
      variant="text"
      @click="stepToPage(0)"
    />
    <v-btn
      v-if="stepToPage"
      :disabled="isPreviousDisabled"
      :text="t('button_text.previous_page')"
      class="text-none"
      color="high-emphasis"
      slim
      variant="text"
      @click="stepToPage(-1)"
    />
    <v-btn
      v-if="stepToPage"
      :disabled="isNextDisabled"
      :text="t('button_text.next_page')"
      class="text-none"
      color="high-emphasis"
      slim
      variant="text"
      @click="stepToPage(1)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineModel, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { mdiPageFirst } from '@mdi/js'

const { t } = useI18n()

const model = defineModel({
  required: true,
  type: Number
})

const pageSizeItems = ref([15, 100, 500, 1000])

defineProps<{
  isNextDisabled: boolean
  isPreviousDisabled: boolean
  stepToPage: (direction: number) => void
}>()
</script>
