import { ref } from 'vue'
import { createInjectionState, onKeyStroke, useToggle } from '@vueuse/core'

export const LARGE_SIDE_DRAWER_ID = 'large-side-drawer'
export const LARGE_SIDE_DRAWER_TO =
  '#large-side-drawer .v-navigation-drawer__content'
export const SMALL_SIDE_DRAWER_ID = 'small-side-drawer'
export const SMALL_SIDE_DRAWER_TO =
  '#small-side-drawer .v-navigation-drawer__content'

const [useProvideOverlay, useOverlay] = createInjectionState(() => {
  const largeSideDrawer = ref(false)
  const smallSideDrawer = ref(false)
  const navDrawer = ref(null)
  const toggleNavDrawer = useToggle(navDrawer)

  // TODO: Needs more testing
  onKeyStroke('Escape', e => {
    if (smallSideDrawer.value) smallSideDrawer.value = false
    else if (largeSideDrawer.value) largeSideDrawer.value = false
    e.preventDefault()
  })

  function showAllSideDrawers(show: boolean) {
    largeSideDrawer.value = show
    smallSideDrawer.value = show
  }
  function showLargeSideDrawer(show: boolean) {
    largeSideDrawer.value = show
  }
  function showSmallSideDrawer(show: boolean) {
    smallSideDrawer.value = show
  }

  return {
    showAllSideDrawers,
    showLargeSideDrawer,
    showSmallSideDrawer,
    largeSideDrawer,
    smallSideDrawer,
    navDrawer,
    toggleNavDrawer
  }
})

function useOverlayOrThrow() {
  const overlay = useOverlay()
  if (overlay == null)
    throw new Error(
      'Please call `useProvideOverlay` on the appropriate parent component'
    )
  return overlay
}

export { useProvideOverlay, useOverlayOrThrow }
