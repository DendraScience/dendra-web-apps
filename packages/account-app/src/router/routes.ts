import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('#root/views/HomePage.vue'),
    meta: {
      headProps: {
        title: 'Account Home'
      }
    }
  },
  {
    path: '/first',
    name: 'first',
    component: () => import('#root/views/FirstPage.vue'),
    meta: {
      headProps: {
        title: 'First'
      },
      requiresAuth: true
    }
  },
  {
    path: '/second',
    name: 'second',
    component: () => import('#root/views/SecondPage.vue'),
    meta: {
      headProps: {
        title: 'Second'
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
