import { type ModelRef, computed, ref, watchEffect } from 'vue'
import { refDebounced } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { BooleanFilter } from '@buf/dendrascience_api.bufbuild_es/dendra/api/metadata/v3alpha1/types_pb'

export function useBooleanFilter(model: ModelRef<BooleanFilter>) {
  const checked = ref(false)
  const select = ref<BooleanFilter>(BooleanFilter.TRUE)

  watchEffect(() => {
    switch (model.value) {
      case BooleanFilter.TRUE:
      case BooleanFilter.FALSE:
        checked.value = true
        select.value = model.value
        break
      default:
        checked.value = false
    }
  })

  watchEffect(() => {
    if (!checked.value) model.value = BooleanFilter.UNSPECIFIED
    else model.value = select.value
  })

  return {
    checked,
    model,
    select
  }
}

export function useFilters() {
  const route = useRoute()
  const { t } = useI18n()
  const isEnabledFilter = ref(BooleanFilter.UNSPECIFIED)
  const isHiddenFilter = ref(BooleanFilter.UNSPECIFIED)
  const searchText = ref('')
  const searchTextDebounced = refDebounced(searchText, 600)

  const filteredByItems = computed(() => {
    const items = []

    switch (isEnabledFilter.value) {
      case BooleanFilter.TRUE:
        items.push({ key: 'isEnabled', text: t('filter.is_enabled') })
        break
      case BooleanFilter.FALSE:
        items.push({ key: 'isEnabled', text: t('filter.not_enabled') })
        break
    }

    switch (isHiddenFilter.value) {
      case BooleanFilter.TRUE:
        items.push({ key: 'isHidden', text: t('filter.is_hidden') })
        break
      case BooleanFilter.FALSE:
        items.push({ key: 'isHidden', text: t('filter.not_hidden') })
        break
    }

    return items
  })

  watchEffect(() => {
    const url = new URL(window.location.href)

    switch (isEnabledFilter.value) {
      case BooleanFilter.TRUE:
        url.searchParams.set('isEnabled', 'true')
        break
      case BooleanFilter.FALSE:
        url.searchParams.set('isEnabled', 'false')
        break
      default:
        url.searchParams.delete('isEnabled')
    }

    switch (isHiddenFilter.value) {
      case BooleanFilter.TRUE:
        url.searchParams.set('isHidden', 'true')
        break
      case BooleanFilter.FALSE:
        url.searchParams.set('isHidden', 'false')
        break
      default:
        url.searchParams.delete('isHidden')
    }

    window.history.replaceState({}, '', url.href)
  })

  function applyRouteQueryFilters() {
    const { isEnabled, isHidden } = route.query

    switch (isEnabled) {
      case 'true': {
        isEnabledFilter.value = BooleanFilter.TRUE
        break
      }
      case 'false': {
        isEnabledFilter.value = BooleanFilter.FALSE
        break
      }
    }

    switch (isHidden) {
      case 'true': {
        isHiddenFilter.value = BooleanFilter.TRUE
        break
      }
      case 'false': {
        isHiddenFilter.value = BooleanFilter.FALSE
        break
      }
    }
  }

  function clearFilters() {
    isEnabledFilter.value = BooleanFilter.UNSPECIFIED
    isHiddenFilter.value = BooleanFilter.UNSPECIFIED
  }

  return {
    applyRouteQueryFilters,
    clearFilters,
    filteredByItems,
    isEnabledFilter,
    isHiddenFilter,
    searchText,
    searchTextDebounced
  }
}
