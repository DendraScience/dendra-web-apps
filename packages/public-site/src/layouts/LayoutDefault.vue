<template>
  <v-app v-scroll="onScroll">
    <v-app-bar
      :color="isHome && top ? 'transparent' : 'rgba(0, 0, 0, .8)'"
      :height="collapse ? APP_BAR_HEIGHT_COLLAPSED : APP_BAR_HEIGHT"
      :elevation="collapse ? undefined : 0"
    >
      <!-- <v-app-bar-nav-icon @click="toggleDrawer()"></v-app-bar-nav-icon> -->

      <a class="ml-6 flex-grow-1" href="/">
        <SiteLogotype
          :height="
            collapse ? APP_BAR_HEIGHT_COLLAPSED - 20 : APP_BAR_HEIGHT - 40
          "
          class="d-none d-sm-block"
        />
        <SiteLogomark
          :height="
            collapse ? APP_BAR_HEIGHT_COLLAPSED - 20 : APP_BAR_HEIGHT - 40
          "
          class="d-block d-sm-none"
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
        variant="flat"
        >{{ item.title }}</v-btn
      >

      <v-menu v-if="isMounted">
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            prepend-icon="menu"
            class="d-flex d-lg-none mr-2"
            color="white"
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
        :icon="dark ? 'dark_mode' : 'light_mode'"
        color="white"
        size="small"
        variant="flat"
        @click="toggleDark()"
      />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list density="compact" nav>
        <v-list-item
          :href="HREF_PUBLIC_SITE"
          prepend-icon="home"
          title="Dendra Home"
        ></v-list-item>
        <v-list-item
          :href="HREF_ACCOUNT_APP"
          prepend-icon="home"
          title="Accounts Home"
        ></v-list-item>
        <v-list-item
          :href="HREF_DATA_QUERY_APP"
          prepend-icon="home"
          title="Query Home"
        ></v-list-item>
        <v-list-item
          prepend-icon="format_paint"
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

    <v-footer class="text-h6" color="black">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </v-footer>
  </v-app>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
// NOTE: Temporarily disabled due to build issues
// import { useI18n } from 'vue-i18n'
import { useDisplay, useTheme } from 'vuetify'
import { usePageContext } from '../renderer/usePageContext'
import {
  APP_BAR_HEIGHT,
  APP_BAR_HEIGHT_COLLAPSED,
  HREF_ACCOUNT_APP,
  HREF_DATA_QUERY_APP,
  HREF_PUBLIC_SITE
} from '#root/lib/consts'
import { useMounted, useStorage, useToggle } from '@vueuse/core'

const { name: breakpointName } = useDisplay()
const { canonicalPaths } = usePageContext()
const isDev = import.meta.env.DEV
const isHome = canonicalPaths.relative === '/'
const isMounted = useMounted()
const theme = useTheme()
// NOTE: Temporarily disabled due to build issues
// const { locale: i18nLocale } = useI18n()
const dark = useStorage('dark', theme.global.current.value.dark)
// NOTE: Temporarily disabled due to build issues
// const locale = useStorage('locale', i18nLocale.value)
const drawer = ref(null)
const toggleDark = useToggle(dark)
// const toggleDrawer = useToggle(drawer)
const top = ref(true)
const collapse = computed(() => isMounted.value && !top.value)
const navItems = reactive([
  {
    color: 'success',
    href: 'https://dendra.science/orgs',
    title: 'View Orgs',
    visible: 'md'
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
  top.value = e.target.documentElement.scrollTop < 20
}

onMounted(async () => {
  watch(
    dark,
    value => {
      theme.global.name.value = value ? 'dark' : 'light'
    },
    { immediate: true }
  )
  // NOTE: Temporarily disabled due to build issues
  // watch(
  //   locale,
  //   value => {
  //     i18nLocale.value = value
  //   },
  //   { immediate: true }
  // )
})
</script>
