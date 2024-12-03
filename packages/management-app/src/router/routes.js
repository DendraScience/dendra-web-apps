const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('#root/views/HomePage.vue'),
    meta: {
      headProps: {
        title: 'Management Home'
      }
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
