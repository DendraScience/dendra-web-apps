<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mt-md-8 mb-8">Start Using Dendra</h1>
        <ShortDivider class="mb-6" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" xl="3">
        <StartCard :to="{ name: 'query' }">
          <h2 class="text-h5 font-weight-medium my-3">
            {{ t('home_card_titles.query') }}
          </h2>
          <p class="text-body-1">
            {{
              t(
                session
                  ? 'home_card_paragraphs.query_session'
                  : 'home_card_paragraphs.query_no_session'
              )
            }}
          </p>
        </StartCard>
      </v-col>

      <v-col cols="12" md="6" xl="3">
        <StartCard :to="{ name: 'manage-places' }">
          <h2 class="text-h5 font-weight-medium my-3">
            {{ t('home_card_titles.manage') }}
          </h2>
          <p class="text-body-1">
            {{
              t(
                session
                  ? 'home_card_paragraphs.manage_session'
                  : 'home_card_paragraphs.manage_no_session'
              )
            }}
          </p>
        </StartCard>
      </v-col>

      <v-col v-if="HREF_DOCUMENTATION" cols="12" md="6" xl="3">
        <StartCard :href="HREF_DOCUMENTATION">
          <h2 class="text-h5 font-weight-medium my-3">
            {{ t('home_card_titles.documentation') }}
          </h2>
          <p class="text-body-1">
            {{ t('home_card_paragraphs.documentation') }}
          </p>
        </StartCard>
      </v-col>

      <v-col v-if="!session" cols="12" md="6" xl="3">
        <StartCard :href="LOGIN_URL">
          <h2 class="text-h5 font-weight-medium my-3">
            {{ t('home_card_titles.login') }}
          </h2>
          <p class="text-body-1">
            {{ t('home_card_paragraphs.login') }}
          </p>
        </StartCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useGlobalState } from '#common/composables/useGlobalState'

const HREF_DOCUMENTATION = import.meta.env.VITE_HREF_DOCUMENTATION
const LOGIN_URL = import.meta.env.VITE_CANOPY_LOGIN_URL

const { t } = useI18n()
const { session } = useGlobalState()
</script>
