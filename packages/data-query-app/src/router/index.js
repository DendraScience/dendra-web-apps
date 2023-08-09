import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { tracker } from './tracker'

const router = createRouter({
  history: createWebHistory(),
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

  // documentProps
  const documentProps = Object.assign({}, to.meta?.documentProps)
  documentProps.title =
    documentProps.title || import.meta.env.VITE_TITLE || 'Hello'
  documentProps.titleTemplate =
    documentProps.titleTemplate || import.meta.env.VITE_TITLE_TEMPLATE || '%s'
  documentProps.titleFull = documentProps.titleTemplate.replace(
    '%s',
    documentProps.title
  )

  document.title = documentProps.titleFull

  if (!(to.name === from.name && to.path === from.path))
    tracker.pageView({ canonicalPaths, documentProps })

  next()
})

export default router
