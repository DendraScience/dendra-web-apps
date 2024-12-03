<template>
  <v-container>
    <v-row class="my-6">
      <v-col cols="12">
        <h1 class="text-h2 mb-4">Manage</h1>
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
    </v-row>
  </v-container>
</template>

<script setup>
// import { create } from '@bufbuild/protobuf'
// import { createClient } from '@connectrpc/connect'
// import { transport } from '#common/lib/dendra-v3'
// import { OrganizationService } from '@buf/dendrascience_api.bufbuild_es/dendra/api/metadata/v3alpha1/organization_service_pb'
// import { GetOrganizationRequestSchema } from '@buf/dendrascience_api.bufbuild_es/dendra/api/metadata/v3alpha1/organization_request_response_pb'

// const organizationServiceClient = createClient(OrganizationService, transport)

// async function getV2Token() {
//   const req = create(GetOrganizationRequestSchema, {
//     organizationId: ''
//   })

//   const resp = await organizationServiceClient.getOrganization(req)
//   /* eslint-disable-next-line no-console */
//   console.log('V2 Token:', resp.organization?.email)
// }
</script>
