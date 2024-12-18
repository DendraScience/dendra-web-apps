<template>
  <v-navigation-drawer theme="dark">
    <template #prepend>
      <v-sheet class="pa-4">
        <v-avatar :image="logoColor" size="50" />
      </v-sheet>
    </template>

    <v-list density="compact" nav slim>
      <v-list-item
        :prepend-icon="mdiFileTree"
        href="/orgs"
        link
        title="Organizations"
      />
      <v-list-item
        href="/memberships"
        link
        prepend-icon="mdi-view-dashboard"
        title="Memberships"
      />
      <v-list-item
        href="/stations"
        link
        prepend-icon="mdi-view-dashboard"
        title="Stations"
      />
      <v-list-item
        href="/datastreams"
        link
        prepend-icon="mdi-view-dashboard"
        title="Datastreams"
      />

      <v-list-subheader>Data Cleaning</v-list-subheader>

      <v-list-item
        href="/annotations"
        link
        prepend-icon="mdi-view-dashboard"
        title="Annotations"
      />

      <v-list-subheader>Equipment Library</v-list-subheader>

      <v-list-item
        href="/companies"
        link
        prepend-icon="mdi-view-dashboard"
        title="Companies"
      />
      <v-list-item
        href="/equipment"
        link
        prepend-icon="mdi-view-dashboard"
        title="Equipment"
      />

      <v-list-subheader>Receive Data</v-list-subheader>

      <v-list-item
        href="/loggers"
        link
        prepend-icon="mdi-view-dashboard"
        title="From data loggers"
      />

      <v-list-item
        href="/webhooks"
        link
        prepend-icon="mdi-view-dashboard"
        title="From webhooks"
      />

      <v-list-subheader>Setup</v-list-subheader>

      <v-list-item
        href="/monitoring"
        link
        prepend-icon="mdi-view-dashboard"
        title="Monitoring"
      />
      <v-list-item
        href="/vocabulary"
        link
        prepend-icon="mdi-view-dashboard"
        title="Vocabulary"
      />
    </v-list>

    <template #append>
      <v-list nav slim variant="tonal">
        <v-list-item
          href="/"
          link
          nav
          prepend-icon="mdi-view-dashboard"
          title="Getting Started"
        />
        <v-list-item
          href="/query"
          link
          nav
          prepend-icon="mdi-view-dashboard"
          title="Query & Download Data"
        />
        <v-list-item
          href="/"
          link
          nav
          prepend-icon="mdi-view-dashboard"
          title="Dendra Home"
        />
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { mdiFileTree } from '@mdi/js'
import logoColor from '#branding/assets/site-logomark-color.svg'
</script>
