<template>
  <v-snackbar
    v-model="snackbar"
    :color="data?.type"
    :timeout="data?.type === 'error' ? 10000 : 3000"
    text="data?.message"
    location="top"
    multi-line
  />
</template>

<script setup lang="ts">
import type { Notification } from '#common/composables/useNotify'
import { ref } from 'vue'
import { useNotify } from '#common/composables/useNotify'

const data = ref<Notification | undefined>()
const snackbar = ref(false)
const { notifyBus } = useNotify()

notifyBus.on(n => {
  data.value = n
  snackbar.value = true
})
</script>
