<template>
  <v-app v-scroll="onScroll">
    <v-app-bar>
      <v-app-bar-nav-icon @click="toggleDrawer()"></v-app-bar-nav-icon>
      <v-app-bar-title>{{ APP_NAME }}</v-app-bar-title>

      <v-spacer />

      <!--
      <div class="h-100 mr-2 pt-3" style="width: 100px">
        <v-select
          v-model="locale"
          :items="$i18n.availableLocales"
          density="compact"
          flat
          variant="solo"
        ></v-select>
      </div>
 -->

      <v-lazy>
        <div v-if="isDev" class="bg-secondary pa-2 mr-2">
          {{ breakpointName }}
        </div>
      </v-lazy>

      <v-btn
        :icon="dark ? 'dark_mode' : 'light_mode'"
        color="white"
        size="small"
        variant="flat"
        @click="toggleDark()"
      />
    </v-app-bar>

    <!--
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list density="compact" nav>
        <v-list-item
          :href="HREF_PUBLIC_SITE"
          :prepend-icon="mdiHome"
          title="Dendra Home"
        ></v-list-item>
        <v-list-item
          :prepend-icon="mdiHome"
          :to="{ name: 'home' }"
          title="Accounts Home"
        ></v-list-item>
        <v-list-item
          :href="HREF_DATA_QUERY_APP"
          :prepend-icon="mdiHome"
          title="Query Home"
        ></v-list-item>
        <v-list-item
          :prepend-icon="mdiFormatPaint"
          :to="{ name: 'theme' }"
          title="Theme"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
 -->
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
// NOTE: Temporarily disabled due to build issues
// import { useI18n } from 'vue-i18n'
import { useDisplay, useTheme } from 'vuetify'
import { useStorage, useToggle } from '@vueuse/core'
import { useNotify } from '#common/composables/useNotify'
import { ConnectError } from '@connectrpc/connect'

const APP_NAME = import.meta.env.VITE_APP_NAME

const { name: breakpointName } = useDisplay()
const isDev = import.meta.env.DEV
const theme = useTheme()
// NOTE: Temporarily disabled due to build issues
// const { locale: i18nLocale } = useI18n()
const dark = useStorage('dark', theme.global.current.value.dark)
// NOTE: Temporarily disabled due to build issues
// const locale = useStorage('locale', i18nLocale.value)
const drawer = ref(null)
const toggleDark = useToggle(dark)
const toggleDrawer = useToggle(drawer)
const top = ref(true)

const { notifyBus } = useNotify()

notifyBus.on(n => {
  if (n instanceof Error) {
    if (n instanceof ConnectError) {
      console.log('>>>', n.message)
      console.log('>>>', n.code)
      console.log('>>>', n.cause)
    }
    console.log('>>>', n.message)
    console.log('>>>', n.name)
  }
})

const onScroll: EventListener = e => {
  if (!(e.target instanceof Document)) return
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
