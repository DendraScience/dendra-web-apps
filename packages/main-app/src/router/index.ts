import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { tracker } from '#common/lib/tracker'
import { useNotify } from '#common/composables/notify'
import { useGlobalState } from '#common/composables/global'
import { Code, ConnectError } from '@connectrpc/connect'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ROUTER_BASE),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
})

router.beforeEach((to, from) => {
  const base = `https://${import.meta.env.VITE_DOMAIN}`
  const url = new URL(to.path.replace(/\/$/, ''), base)
  const absolute = url.href
  const relative = url.pathname
  const canonicalPaths: CanonicalPaths = {
    base,
    absolute,
    relative
  }

  const headProps: HeadProps = { title: '' }

  if (to.meta.headProps && typeof to.meta.headProps === 'object') {
    const props = to.meta.headProps

    if ('title' in props && typeof props.title === 'string')
      headProps.title = props.title
    if ('titleTemplate' in props && typeof props.titleTemplate === 'string')
      headProps.titleTemplate = props.titleTemplate
  }

  headProps.title = headProps.title || import.meta.env.VITE_TITLE || 'Hello'
  headProps.titleTemplate =
    headProps.titleTemplate || import.meta.env.VITE_TITLE_TEMPLATE || '%s'
  headProps.titleFull = headProps.titleTemplate
    ? headProps.titleTemplate.replace('%s', headProps.title)
    : headProps.title

  document.title = headProps.titleFull

  if (!(to.name === from.name && to.path === from.path))
    tracker.pageView({ canonicalPaths, headProps })
})

router.beforeEach(async to => {
  const { fetchSession } = useGlobalState()

  try {
    await fetchSession()
  } catch (err) {
    if (err instanceof ConnectError) {
      if (err.code === Code.PermissionDenied) {
        if (!to.meta.requiresAuth) return

        // TODO: Utilize to.fullPath to return to page after login
        window.location.href = import.meta.env.VITE_CANOPY_LOGIN_URL
        return new Promise(() => {})
      }

      throw err
    }
  }
})

router.afterEach(async to => {
  const { login, logout } = to.query
  const { sessionChannel } = useGlobalState()

  // Check for params to sync auth w/ other browsing contexts
  if (login === null && logout === undefined) {
    sessionChannel.postMessage('login')
    const url = new URL(window.location.href)
    url.searchParams.delete('login')
    window.history.replaceState({}, '', url.href)
  } else if (login === undefined && logout === null) {
    sessionChannel.postMessage('logout')
    const url = new URL(window.location.href)
    url.searchParams.delete('logout')
    window.history.replaceState({}, '', url.href)
  }
})

router.onError(error => {
  const { notify } = useNotify()
  notify(error)
})

export default router
