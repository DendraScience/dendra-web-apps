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
        <v-btn class="mr-2" href="http://localhost:8080/auth/login"
          >Log in</v-btn
        >
        <v-btn class="mr-2" href="http://localhost:8080/auth/logout"
          >Log out</v-btn
        >
        <v-btn @click="getCurrentSession">Get Current Session</v-btn>
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

const sessionServiceClient = createClient(SessionService, transport)

async function getCurrentSession() {
  // const req = create(GetCurrentSessionRequestSchema, {})
  const resp = await sessionServiceClient.getCurrentSession({})

  /* eslint-disable-next-line no-console */
  console.log('Session:', resp)
}
</script>
