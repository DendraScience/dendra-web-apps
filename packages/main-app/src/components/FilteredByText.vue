<template>
  <div v-if="items.length" class="d-flex align-center mt-2">
    <span class="text-medium-emphasis text-uppercase mr-1">{{
      t('filter.filtered_by_text')
    }}</span>
    <template v-for="(item, i) in items" :key="item.key">
      <span class="mx-1">{{ item.text }}</span
      >{{ i < items.length - 1 ? '&' : '' }}
    </template>

    <v-icon
      :icon="mdiCloseCircle"
      color="medium-emphasis"
      style="margin-top: -2px"
      @click="emit('clear')"
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { mdiCloseCircle } from '@mdi/js'

defineProps<{
  items: { key: string; text: string }[]
}>()

const emit = defineEmits<{
  (e: 'clear'): void
}>()

const { t } = useI18n()
</script>
