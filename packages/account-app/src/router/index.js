import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { tracker } from '#common/lib/tracker'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ROUTER_BASE),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // canonicalPaths
  const base = `https://${import.meta.env.VITE_DOMAIN}`
  const url = new URL(to.path.replace(/\/$/, ''), base)
  const absolute = url.href
  const relative = url.pathname
  const canonicalPaths = {
    base,
    absolute,
    relative
  }

  // headProps
  const headProps = Object.assign({}, to.meta?.headProps)
  headProps.title = headProps.title || import.meta.env.VITE_TITLE || 'Hello'
  headProps.titleTemplate =
    headProps.titleTemplate || import.meta.env.VITE_TITLE_TEMPLATE || '%s'
  headProps.titleFull = headProps.titleTemplate.replace('%s', headProps.title)

  document.title = headProps.titleFull

  if (!(to.name === from.name && to.path === from.path))
    tracker.pageView({ canonicalPaths, headProps })

  next()
})

export default router
