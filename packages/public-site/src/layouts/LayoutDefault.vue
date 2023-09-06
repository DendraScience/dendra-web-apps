<template>
  <v-app v-scroll="onScroll">
    <v-app-bar
      :color="isHome && top ? 'transparent' : 'rgba(0, 0, 0, .8)'"
      :height="collapse ? APP_BAR_HEIGHT_COLLAPSED : APP_BAR_HEIGHT"
    >
      <!-- <v-app-bar-nav-icon @click="toggleDrawer()"></v-app-bar-nav-icon> -->

      <a class="ml-6 flex-grow-1" href="/">
        <SiteLogotype
          class="d-none d-sm-block"
          :style="{
            maxHeight: `${
              collapse ? APP_BAR_HEIGHT_COLLAPSED - 20 : APP_BAR_HEIGHT - 40
            }px`
          }"
        />
        <SiteLogomark
          class="d-block d-sm-none"
          :style="{
            maxHeight: `${
              collapse ? APP_BAR_HEIGHT_COLLAPSED - 20 : APP_BAR_HEIGHT - 40
            }px`
          }"
        />
      </a>

      <v-spacer />

      <!--
      <div class="h-100 mr-2 pt-3" style="width: 100px">
        <v-select
          v-if="isMounted"
          v-model="locale"
          :items="$i18n.availableLocales"
          density="compact"
          flat
          variant="solo"
        ></v-select>
      </div>
 -->

      <div v-if="isDev && isMounted" class="bg-secondary pa-2 mr-2">
        {{ breakpointName }}
      </div>

      <v-btn
        v-for="item in navItems"
        :key="item.href"
        :active="item.href === canonicalPaths.relative"
        :class="`d-none d-${item.visible}-flex`"
        :color="item.color || 'white'"
        :href="item.href"
        class="mr-2"
        exact
        rounded="0"
        variant="flat"
        >{{ item.title }}</v-btn
      >

      <v-menu v-if="isMounted">
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            :prepend-icon="mdiMenu"
            class="d-flex d-lg-none mr-2"
            color="white"
            rounded="0"
            variant="flat"
            >Menu</v-btn
          >
        </template>

        <v-list>
          <v-list-item
            v-for="item in navItems"
            :key="item.href"
            :active="item.href === canonicalPaths.relative"
            :class="`d-flex d-${item.visible}-none`"
            :href="item.href"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
        v-if="isMounted"
        :icon="dark ? mdiWeatherNight : mdiWeatherSunny"
        color="white"
        size="small"
        rounded="0"
        variant="flat"
        @click="toggleDark()"
      />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list density="compact" nav>
        <v-list-item
          :href="HREF_PUBLIC_SITE"
          :prepend-icon="mdiHome"
          title="Dendra Home"
        ></v-list-item>
        <v-list-item
          :href="HREF_ACCOUNT_APP"
          :prepend-icon="mdiHome"
          title="Accounts Home"
        ></v-list-item>
        <v-list-item
          :href="HREF_DATA_QUERY_APP"
          :prepend-icon="mdiHome"
          title="Query Home"
        ></v-list-item>
        <v-list-item
          :prepend-icon="mdiFormatPaint"
          href="/theme"
          title="Theme"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main
      :style="{
        marginTop: `${
          !isHome ? 0 : collapse ? -APP_BAR_HEIGHT_COLLAPSED : -APP_BAR_HEIGHT
        }px`
      }"
    >
      <slot />
    </v-main>

    <v-footer absolute app color="black">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </v-footer>
  </v-app>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDisplay, useTheme } from 'vuetify'
import { usePageContext } from '../renderer/usePageContext'
import { useMounted, useStorage, useToggle } from '@vueuse/core'
import {
  mdiFormatPaint,
  mdiHome,
  mdiMenu,
  mdiWeatherNight,
  mdiWeatherSunny
} from '@mdi/js'

const APP_BAR_HEIGHT = 120
const APP_BAR_HEIGHT_COLLAPSED = 80
// const APP_NAME = import.meta.env.VITE_APP_NAME
const HREF_ACCOUNT_APP = import.meta.env.VITE_HREF_ACCOUNT_APP
const HREF_DATA_QUERY_APP = import.meta.env.VITE_HREF_DATA_QUERY_APP
const HREF_PUBLIC_SITE = import.meta.env.VITE_HREF_PUBLIC_SITE

const { name: breakpointName } = useDisplay()
const { canonicalPaths } = usePageContext()
const isDev = import.meta.env.DEV
const isHome = canonicalPaths.relative === '/'
const isMounted = useMounted()
const theme = useTheme()
const { locale: i18nLocale } = useI18n()
const dark = useStorage('dark', theme.global.current.value.dark)
const locale = useStorage('locale', i18nLocale.value)
const drawer = ref(null)
const toggleDark = useToggle(dark)
// const toggleDrawer = useToggle(drawer)
const top = ref(true)
const collapse = computed(() => isMounted.value && !top.value)
const navItems = reactive([
  {
    color: 'primary',
    href: 'https://dendra.science/orgs',
    title: 'Data Portal',
    visible: 'sm'
  },
  {
    href: '/learn',
    title: 'Learn',
    visible: 'lg'
  },
  {
    href: '/faqs',
    title: 'FAQs',
    visible: 'lg'
  },
  {
    href: '/support',
    title: 'Support',
    visible: 'lg'
  },
  {
    href: '/theme',
    title: 'Theme',
    visible: 'lg'
  }
])

function onScroll(e) {
  top.value = e.target.documentElement.scrollTop < 120
}

onMounted(async () => {
  watch(
    dark,
    value => {
      theme.global.name.value = value ? 'dark' : 'light'
    },
    { immediate: true }
  )
  watch(
    locale,
    value => {
      i18nLocale.value = value
    },
    { immediate: true }
  )
})
</script>
