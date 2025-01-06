<template>
  <v-row align="center" dense>
    <v-col cols="auto">
      <v-checkbox-btn v-model="checked" density="compact"></v-checkbox-btn>
    </v-col>

    <v-col>
      <v-select
        v-model="select"
        :items="selectItems"
        density="compact"
        hide-details
        variant="outlined"
      ></v-select>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { BooleanFilter } from '@buf/dendrascience_api.bufbuild_es/dendra/api/metadata/v3alpha1/types_pb'
import { shallowRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { useBooleanFilter } from '#common/composables/filter'

const model = defineModel<BooleanFilter>({
  required: true
})

const { t } = useI18n()
const { checked, select } = useBooleanFilter(model)
const selectItems = shallowRef([
  { title: t('filter.is_enabled'), value: BooleanFilter.TRUE },
  { title: t('filter.not_enabled'), value: BooleanFilter.FALSE }
])
</script>
