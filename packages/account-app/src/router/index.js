import { Code, ConnectError, createClient } from '@connectrpc/connect'
import { transport } from '#common/lib/dendra-v3'
import { SessionService } from '@buf/dendrascience_api.bufbuild_es/dendra/api/auth/v3alpha1/service_pb'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { tracker } from '#common/lib/tracker'

const sessionServiceClient = createClient(SessionService, transport)

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
  /** @type {CanonicalPaths} */
  const canonicalPaths = {
    base,
    absolute,
    relative
  }

  /** @type {HeadProps} */
  const headProps = {}

  if (to.meta.headProps && typeof to.meta.headProps === 'object') {
    const props = to.meta.headProps

    if ('description' in props && typeof props.description === 'string')
      headProps.description = props.description
    if ('title' in props && typeof props.title === 'string')
      headProps.title = props.title
    if ('titleTemplate' in props && typeof props.titleTemplate === 'string')
      headProps.titleTemplate = props.titleTemplate
  }

  headProps.title = headProps.title || import.meta.env.VITE_TITLE || 'Hello'
  headProps.titleTemplate =
    headProps.titleTemplate || import.meta.env.VITE_TITLE_TEMPLATE + '' || '%s'
  headProps.titleFull = headProps.titleTemplate.replace('%s', headProps.title)

  document.title = headProps.titleFull

  if (!(to.name === from.name && to.path === from.path))
    tracker.pageView({ canonicalPaths, headProps })
})

router.beforeEach(async to => {
  if (!to.meta.requiresAuth) return

  try {
    await sessionServiceClient.getCurrentSession({})
    // TODO: store session info somewhere
  } catch (err) {
    if (err instanceof ConnectError) {
      if (err.code === Code.PermissionDenied) {
        window.location.href = 'http://localhost:8080/auth/login'
        return new Promise(() => {})
      }

      throw err
    }
  }
})

export default router
