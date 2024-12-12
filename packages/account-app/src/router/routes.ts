import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('#root/views/HomePage.vue'),
    meta: {
      headProps: {
        title: 'Account Home'
      },
      requiresAuth: true
    }
  },
  {
    path: '/theme',
    name: 'theme',
    component: () => import('#root/views/ThemePage.vue'),
    meta: {
      headProps: {
        title: 'Theme'
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('#root/views/NotFoundPage.vue')
  }
]

export default routes
