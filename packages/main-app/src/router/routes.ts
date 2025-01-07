import type { RouteRecordRaw } from 'vue-router'
import i18n from '#root/config/i18n'

const { t } = i18n.global

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('#root/views/HomePage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.home')
      }
    }
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.download')
      },
      layout: 'Query'
    }
  },
  {
    path: '/query',
    name: 'query',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.query')
      },
      layout: 'Query'
    }
  },
  {
    path: '/status',
    name: 'status',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.status')
      },
      layout: 'Query'
    }
  },
  {
    path: '/manage/places',
    name: 'manage-places',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.manage_places')
      },
      layout: 'Manage',
      requiresAuth: true
    }
  },
  {
    path: '/manage/stations',
    name: 'manage-stations',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.manage_stations')
      },
      layout: 'Manage',
      requiresAuth: true
    }
  },
  {
    path: '/manage/datastreams',
    name: 'manage-datastreams',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.manage_datastreams')
      },
      layout: 'Manage',
      requiresAuth: true
    }
  },
  {
    path: '/manage/data-products',
    name: 'manage-dataProducts',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.manage_data_products')
      },
      layout: 'Manage',
      requiresAuth: true
    }
  },
  {
    path: '/manage/annotations',
    name: 'manage-annotations',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.manage_annotations')
      },
      layout: 'Manage',
      requiresAuth: true
    }
  },
  {
    path: '/manage/companies',
    name: 'manage-companies',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.manage_companies')
      },
      layout: 'Manage',
      requiresAuth: true
    }
  },
  {
    path: '/manage/equipment',
    name: 'manage-equipment',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.manage_equipment')
      },
      layout: 'Manage',
      requiresAuth: true
    }
  },
  {
    path: '/manage/data-loggers',
    name: 'manage-dataLoggers',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.manage_data_loggers')
      },
      layout: 'Manage',
      requiresAuth: true
    }
  },
  {
    path: '/manage/file-upload',
    name: 'manage-fileUpload',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.manage_file_upload')
      },
      layout: 'Manage',
      requiresAuth: true
    }
  },
  {
    path: '/manage/webhooks',
    name: 'manage-webhooks',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.manage_webhooks')
      },
      layout: 'Manage',
      requiresAuth: true
    }
  },
  {
    path: '/manage/organizations',
    name: 'manage-organizations',
    component: () => import('#root/views/ManageOrganizationsPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.manage_organizations')
      },
      layout: 'ManageCompact',
      requiresAuth: true
    }
  },
  {
    path: '/manage/memberships',
    name: 'manage-memberships',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.manage_memberships')
      },
      layout: 'Manage',
      requiresAuth: true
    }
  },
  {
    path: '/manage/persons',
    name: 'manage-persons',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.manage_persons')
      },
      layout: 'Manage',
      requiresAuth: true
    }
  },
  {
    path: '/manage/groups',
    name: 'manage-groups',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.manage_groups')
      },
      layout: 'Manage',
      requiresAuth: true
    }
  },
  {
    path: '/manage/monitoring',
    name: 'manage-monitoring',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.manage_monitoring')
      },
      layout: 'Manage',
      requiresAuth: true
    }
  },
  {
    path: '/manage/vocabulary',
    name: 'manage-vocabulary',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.manage_vocabulary')
      },
      layout: 'Manage',
      requiresAuth: true
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('#root/views/PlaceholderPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.settings')
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
        title: t('page_titles.theme')
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('#root/views/NotFoundPage.vue'),
    meta: {
      headProps: {
        title: t('page_titles.not_found')
      }
    }
  }
]

export default routes
