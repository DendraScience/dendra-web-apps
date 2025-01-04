<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-h3 mt-md-8">{{ t('home_page.top_heading') }}</h1>
        <p v-if="session && session.profile" class="mt-3">
          {{ t('home_page.top_paragraph_session', session.profile) }}
        </p>
        <ShortDivider class="my-6" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" xl="3">
        <StartCard :to="{ name: 'query' }">
          <h2 class="text-h5 font-weight-medium my-3">
            {{ t('home_cards.query_title') }}
          </h2>
          <p class="text-body-1">
            {{
              t(
                session
                  ? 'home_cards.query_text_session'
                  : 'home_cards.query_text_no_session'
              )
            }}
          </p>
        </StartCard>
      </v-col>

      <v-col cols="12" md="6" xl="3">
        <StartCard :to="{ name: 'manage-places' }">
          <h2 class="text-h5 font-weight-medium my-3">
            {{ t('home_cards.manage_title') }}
          </h2>
          <p class="text-body-1">
            {{
              t(
                session
                  ? 'home_cards.manage_text_session'
                  : 'home_cards.manage_text_no_session'
              )
            }}
          </p>
        </StartCard>
      </v-col>

      <v-col v-if="HREF_DOCUMENTATION" cols="12" md="6" xl="3">
        <StartCard :href="HREF_DOCUMENTATION">
          <h2 class="text-h5 font-weight-medium my-3">
            {{ t('home_cards.documentation_title') }}
          </h2>
          <p class="text-body-1">
            {{ t('home_cards.documentation_text') }}
          </p>
        </StartCard>
      </v-col>

      <v-col v-if="!session" cols="12" md="6" xl="3">
        <StartCard :href="LOGIN_URL">
          <h2 class="text-h5 font-weight-medium my-3">
            {{ t('home_cards.login_title') }}
          </h2>
          <p class="text-body-1">
            {{ t('home_cards.login_text') }}
          </p>
        </StartCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useGlobalState } from '#common/composables/global'

const HREF_DOCUMENTATION = import.meta.env.VITE_HREF_DOCUMENTATION
const LOGIN_URL = import.meta.env.VITE_CANOPY_LOGIN_URL

const { t } = useI18n()
const { session } = useGlobalState()
</script>
