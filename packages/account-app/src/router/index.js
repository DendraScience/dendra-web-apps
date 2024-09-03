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

  if (typeof to.meta.headProps === 'object' && to.meta.headProps !== null) {
    const props = to.meta.headProps

    if ('description' in props && typeof props.description === 'string')
      headProps.description = props.description
    if ('title' in props && typeof props.title === 'string')
      headProps.title = props.title
    if ('titleTemplate' in props && typeof props.titleTemplate === 'string')
      headProps.titleTemplate = props.titleTemplate
  }

  headProps.description = headProps.description || ''
  headProps.title = headProps.title || import.meta.env.VITE_TITLE || 'Hello'
  headProps.titleTemplate =
    headProps.titleTemplate || import.meta.env.VITE_TITLE_TEMPLATE + '' || '%s'
  headProps.titleFull = headProps.titleTemplate.replace('%s', headProps.title)

  document.title = headProps.titleFull

  if (!(to.name === from.name && to.path === from.path))
    tracker.pageView({ canonicalPaths, headProps })

  next()
})

export default router
