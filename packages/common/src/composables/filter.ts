import { BooleanFilter } from '@buf/dendrascience_api.bufbuild_es/dendra/api/metadata/v3alpha1/types_pb'
import { ref } from 'vue'
import { refDebounced } from '@vueuse/core'

export function useFilters() {
  const isEnabledFilter = ref(BooleanFilter.UNSPECIFIED)
  const isHiddenFilter = ref(BooleanFilter.UNSPECIFIED)
  const searchText = ref('')
  const searchTextDebounced = refDebounced(searchText, 600)

  return {
    isEnabledFilter,
    isHiddenFilter,
    searchText,
    searchTextDebounced
  }
}
