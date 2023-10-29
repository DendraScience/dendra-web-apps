<template>
  <v-footer class="py-8 py-md-16" color="black">
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <SiteLogomark style="opacity: 0.5" width="100" white />
        </v-col>
      </v-row>

      <v-row v-if="navItems?.length">
        <v-col class="text-center">
          <v-btn
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-none ma-2"
            color="white"
            tag="a"
            variant="text"
            >{{ item.title }}</v-btn
          >
        </v-col>
      </v-row>

      <v-row>
        <v-col class="text-center">
          <v-icon class="ma-4" icon="social:github" size="48" />
          <v-icon class="ma-4" icon="social:slack" size="48" />
          <v-icon class="ma-4" icon="social:x-twitter" size="48" />
          <v-icon class="ma-4" icon="social:youtube" size="48" />
        </v-col>
      </v-row>

      <v-row>
        <v-col class="text-body-1 text-center">
          Copyright © {{ new Date().getFullYear() }} Dendra Science. All rights
          reserved.
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
defineProps({
  navItems: {
    default: undefined,
    type: Array
  }
})
</script>
