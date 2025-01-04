<template>
  <v-btn
    :prepend-icon="mdiPlus"
    :text="t('button_text.new_item')"
    class="text-none ma-1"
    slim
    variant="flat"
    >New</v-btn
  >
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { mdiPlus } from '@mdi/js'

const { t } = useI18n()
</script>
