const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('#root/views/HomePage.vue'),
    meta: {
      documentProps: {
        title: 'Home'
      }
    }
  },
  {
    path: '/theme',
    name: 'theme',
    component: () => import('#root/views/ThemePage.vue'),
    meta: {
      documentProps: {
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
