import { type MaybeRefOrGetter, type Ref, computed, ref, toValue } from 'vue'

export function usePageState() {
  const pageSize = ref(100)
  const pageToken = ref('')

  return {
    pageSize,
    pageToken
  }
}

export function usePager({
  data,
  isError,
  isPending,
  pageToken
}: {
  data: MaybeRefOrGetter<any>
  isError: MaybeRefOrGetter<boolean>
  isPending: MaybeRefOrGetter<boolean>
  pageToken: Ref<string>
}) {
  const pageTokenStack = ref<string[]>([])

  const isNextDisabled = computed(
    () =>
      toValue(isPending) ||
      toValue(isError) ||
      !toValue(data) ||
      toValue(data).nextPageToken === ''
  )

  const isPreviousDisabled = computed(
    () =>
      toValue(isPending) ||
      toValue(isError) ||
      toValue(pageTokenStack).length === 0
  )

  function firstPage() {
    pageToken.value = ''
    pageTokenStack.value = []
  }

  function nextPage() {
    if (!toValue(isPending) && !toValue(isError) && toValue(data)) {
      pageTokenStack.value.push(pageToken.value)
      pageToken.value = data.value.nextPageToken
    }
  }

  function previousPage() {
    if (!toValue(isPending) && !toValue(isError)) {
      const token = pageTokenStack.value.pop()
      if (token !== undefined) pageToken.value = token
    }
  }

  function stepToPage(direction: number) {
    switch (direction) {
      case -1:
        return previousPage()
      case 0:
        return firstPage()
      case 1:
        return nextPage()
    }
  }

  return {
    firstPage,
    isNextDisabled,
    isPreviousDisabled,
    nextPage,
    pageTokenStack,
    previousPage,
    stepToPage
  }
}
