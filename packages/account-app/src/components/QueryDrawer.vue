<template>
  <v-navigation-drawer theme="dark">
    <v-list v-if="session" density="compact" nav slim>
      <v-list-item
        :prepend-icon="mdiMapMarker"
        :title="t('management_titles.places')"
        :to="{ name: 'manage-places' }"
        link
      />
      <v-list-item
        :prepend-icon="mdiNature"
        :title="t('management_titles.stations')"
        :to="{ name: 'manage-stations' }"
        link
      />
      <v-list-item
        :prepend-icon="mdiChartTimelineVariant"
        :title="t('management_titles.datastreams')"
        :to="{ name: 'manage-datastreams' }"
        link
      />
      <v-list-item
        :prepend-icon="mdiCalculatorVariant"
        :title="t('management_titles.data_products')"
        :to="{ name: 'manage-dataProducts' }"
        link
      />

      <v-list-subheader
        class="text-uppercase"
        :title="t('management_subheaders.data_cleaning')"
      />

      <v-list-item
        :prepend-icon="mdiNoteOutline"
        :title="t('management_titles.annotations')"
        :to="{ name: 'manage-annotations' }"
        link
      />

      <v-list-subheader
        class="text-uppercase"
        :title="t('management_subheaders.equipment_library')"
        :to="{ name: 'manage-equipmentLibrary' }"
      />

      <v-list-item
        :prepend-icon="mdiOfficeBuilding"
        :title="t('management_titles.companies')"
        :to="{ name: 'manage-companies' }"
        link
      />
      <v-list-item
        :prepend-icon="mdiHexagonSlice6"
        :title="t('management_titles.equipment')"
        :to="{ name: 'manage-equipment' }"
        link
      />

      <v-list-subheader
        class="text-uppercase"
        :title="t('management_subheaders.setup')"
      />

      <v-list-group fluid>
        <template #activator="{ props: activatorProps }">
          <v-list-item
            :prepend-icon="mdiImport"
            :title="t('management_titles.data_ingestion')"
            v-bind="activatorProps"
          />
        </template>

        <v-list-item
          :prepend-icon="mdiCircleSmall"
          :title="t('management_titles.data_loggers')"
          :to="{ name: 'manage-dataLoggers' }"
          link
        />
        <v-list-item
          :prepend-icon="mdiCircleSmall"
          :title="t('management_titles.file_upload')"
          :to="{ name: 'manage-fileUpload' }"
          link
        />
        <v-list-item
          :prepend-icon="mdiCircleSmall"
          :title="t('management_titles.webhooks')"
          :to="{ name: 'manage-webhooks' }"
          link
        />
      </v-list-group>

      <v-list-group fluid>
        <template #activator="{ props: activatorProps }">
          <v-list-item
            :prepend-icon="mdiFileTree"
            :title="t('management_titles.community')"
            v-bind="activatorProps"
          />
        </template>

        <v-list-item
          :prepend-icon="mdiCircleSmall"
          :title="t('management_titles.organizations')"
          :to="{ name: 'manage-organizations' }"
          link
        />
        <v-list-item
          :prepend-icon="mdiCircleSmall"
          :title="t('management_titles.memberships')"
          :to="{ name: 'manage-memberships' }"
          link
        />
        <v-list-item
          :prepend-icon="mdiCircleSmall"
          :title="t('management_titles.persons')"
          :to="{ name: 'manage-persons' }"
          link
        />
        <v-list-item
          :prepend-icon="mdiCircleSmall"
          :title="t('management_titles.groups')"
          :to="{ name: 'manage-groups' }"
          link
        />
      </v-list-group>

      <v-list-item
        :prepend-icon="mdiCheckCircle"
        :title="t('management_titles.monitoring')"
        :to="{ name: 'manage-monitoring' }"
        href="/manage/monitoring"
        link
      />
      <v-list-item
        :prepend-icon="mdiTag"
        :title="t('management_titles.vocabulary')"
        :to="{ name: 'manage-vocabulary' }"
        link
      />
    </v-list>

    <v-list v-else density="compact" nav slim>
      <v-list-item
        :href="LOGIN_URL"
        :prepend-icon="mdiLogin"
        :title="t('management_titles.login')"
      />
    </v-list>

    <template #append>
      <v-list nav slim variant="tonal">
        <v-list-item
          :prepend-icon="mdiRocketLaunch"
          :title="t('management_titles.start')"
          :to="{ name: 'home' }"
          link
          nav
        />
        <v-list-item
          :prepend-icon="mdiChartMultiple"
          :title="t('management_titles.query')"
          href="/query"
          link
          nav
          target="_blank"
        />
        <v-list-item
          v-if="HREF_HOME"
          :href="HREF_HOME"
          :prepend-icon="mdiHome"
          :title="t('management_titles.home')"
          link
          nav
          target="_blank"
        />
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  mdiCalculatorVariant,
  mdiChartMultiple,
  mdiChartTimelineVariant,
  mdiCheckCircle,
  mdiCircleSmall,
  mdiFileTree,
  mdiHexagonSlice6,
  mdiHome,
  mdiImport,
  mdiLogin,
  mdiMapMarker,
  mdiNature,
  mdiNoteOutline,
  mdiOfficeBuilding,
  mdiRocketLaunch,
  mdiTag
} from '@mdi/js'
import { useGlobalState } from '#common/composables/useGlobalState'

const HREF_HOME = import.meta.env.VITE_HREF_HOME
const LOGIN_URL = import.meta.env.VITE_CANOPY_LOGIN_URL

const { t } = useI18n()
const { session } = useGlobalState()
</script>
