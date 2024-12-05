<template>
  <v-container>
    <v-row class="my-6">
      <v-col cols="12">
        <h1 class="text-h2 mb-4">Auth Test</h1>
        <p class="text-body-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </v-col>

      <v-col cols="12">
        <v-btn :href="VITE_CANOPY_LOGIN_URL" class="mr-2">Log in</v-btn>
        <v-btn :href="VITE_CANOPY_LOGOUT_URL" class="mr-2">Log out</v-btn>
        <v-btn @click="getCurrentSession">Get Current Session</v-btn>
      </v-col>

      <v-col cols="12">
        <p>Name: {{ session?.profile?.name }}</p>
        <p>Nickname: {{ session?.profile?.nickname }}</p>
        <p>Subject: {{ session?.profile?.subject }}</p>
        <p>Email: {{ session?.profile?.email }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// import { create } from '@bufbuild/protobuf'
import { createClient } from '@connectrpc/connect'
import { transport } from '#common/lib/dendra-v3'
import { SessionService } from '@buf/dendrascience_api.bufbuild_es/dendra/api/auth/v3alpha1/service_pb'
// import { GetCurrentSessionRequestSchema } from '@buf/dendrascience_api.bufbuild_es/dendra/api/auth/v3alpha1/request_response_pb'
import { useGlobalState } from '#common/composables/useGlobalState'

const VITE_CANOPY_LOGIN_URL = import.meta.env.VITE_CANOPY_LOGIN_URL
const VITE_CANOPY_LOGOUT_URL = import.meta.env.VITE_CANOPY_LOGOUT_URL

const sessionServiceClient = createClient(SessionService, transport)

const { session } = useGlobalState()

async function getCurrentSession() {
  // const req = create(GetCurrentSessionRequestSchema, {})
  const resp = await sessionServiceClient.getCurrentSession({})

  /* eslint-disable-next-line no-console */
  console.log('Session:', resp)
}
</script>
