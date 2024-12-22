<template>
  <v-footer
    absolute
    app
    class="d-flex flex-wrap flex-sm-nowrap justify-center justify-sm-space-between align-center pa-4 mt-7"
  >
    <p class="text-caption text-center text-sm-left ma-2">
      Copyright &copy; 2016-{{ new Date().getFullYear() }} {{ APP_NAME }}. All
      rights reserved.
    </p>

    <div class="text-center">
      <v-btn
        v-if="HREF_TERMS"
        :href="HREF_TERMS"
        :ripple="false"
        :text="t('footer_links.terms')"
        class="text-none"
        color=""
        exact
        target="_blank"
        variant="plain"
      />
      <v-btn
        v-if="HREF_PRIVACY"
        :href="HREF_PRIVACY"
        :ripple="false"
        :text="t('footer_links.privacy')"
        class="text-none"
        color=""
        exact
        target="_blank"
        variant="plain"
      />
      <v-btn
        v-if="HREF_CONTACT"
        :href="HREF_CONTACT"
        :ripple="false"
        :text="t('footer_links.contact')"
        class="text-none"
        color=""
        exact
        target="_blank"
        variant="plain"
      />
      <v-btn
        v-if="HREF_PUBLIC_SITE"
        :href="HREF_PUBLIC_SITE"
        :ripple="false"
        :text="t('footer_links.public_site')"
        class="text-none"
        color=""
        exact
        target="_blank"
        variant="plain"
      />
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const APP_NAME = import.meta.env.VITE_APP_NAME
const HREF_CONTACT = import.meta.env.VITE_HREF_CONTACT
const HREF_PRIVACY = import.meta.env.VITE_HREF_PRIVACY
const HREF_PUBLIC_SITE = import.meta.env.VITE_HREF_PUBLIC_SITE
const HREF_TERMS = import.meta.env.VITE_HREF_TERMS

const { t } = useI18n()
</script>
