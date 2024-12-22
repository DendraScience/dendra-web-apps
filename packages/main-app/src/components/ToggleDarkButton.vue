<template>
  <v-tooltip :text="t('tooltips.toggle_dark_button')" location="bottom">
    <template #activator="{ props: tooltip }">
      <v-btn
        v-bind="tooltip"
        :aria-label="t('aria_labels.toggle_dark_button')"
        :icon="isDark ? mdiWeatherNight : mdiWhiteBalanceSunny"
        @click="toggle()"
      />
    </template>
  </v-tooltip>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'
import { useDark, useToggle } from '@vueuse/core'
import { mdiWeatherNight, mdiWhiteBalanceSunny } from '@mdi/js'

const { t } = useI18n()
const theme = useTheme()
const isDark = useDark({
  onChanged(dark: boolean) {
    theme.global.name.value = dark ? 'dark' : 'light'
  }
})
const toggle = useToggle(isDark)
</script>
