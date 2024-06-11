<template>
  <v-container class="my-8 my-md-16">
    <v-row v-if="value.title || value.paragraph" class="mb-md-8">
      <v-col cols="12" xl="10">
        <SectionTitle class="mb-4">
          {{ value.title }}
        </SectionTitle>

        <p
          v-if="value.paragraph"
          class="text-body-1 text-md-h6 font-weight-regular"
        >
          {{ value.paragraph }}
        </p>
      </v-col>
    </v-row>

    <template v-if="value.capabilities && value.capabilities.length">
      <v-row v-for="(capability, i) of value.capabilities" :key="i">
        <template v-if="typeof capability === 'number'" />

        <template v-else>
          <template v-if="typeof capability.capabilities_id === 'number'" />

          <v-col v-else-if="capability.capabilities_id" cols="12" xl="10">
            <v-card rounded="0" flat>
              <v-container fluid>
                <v-row align="start">
                  <v-col align="center" cols="auto">
                    <div
                      class="d-flex align-center justify-end"
                      style="position: relative; margin-right: 32px"
                    >
                      <CoverImage
                        v-if="
                          capability.capabilities_id.image &&
                          typeof capability.capabilities_id.image !== 'string'
                        "
                        :image="capability.capabilities_id.image"
                        :sizes="{
                          xs: '300px'
                        }"
                        :transformation="
                          capability.capabilities_id.transformation &&
                          typeof capability.capabilities_id.transformation !==
                            'number'
                            ? capability.capabilities_id.transformation
                            : undefined
                        "
                        class="rounded"
                        width="200"
                      >
                      </CoverImage>

                      <v-avatar
                        v-if="capability.capabilities_id.icon"
                        class="elevation-2"
                        color="primary"
                        size="64"
                        style="position: absolute; right: -32px"
                      >
                        <v-icon
                          :icon="capability.capabilities_id.icon"
                          size="48"
                        />
                      </v-avatar>
                    </div>
                  </v-col>

                  <v-col class="text-body-1" cols="12" md="">
                    <h3
                      v-if="capability.capabilities_id.title"
                      class="text-h6 text-md-h5 mb-4 font-weight-medium"
                    >
                      {{ capability.capabilities_id.title }}
                    </h3>

                    <!-- eslint-disable vue/no-v-html -->
                    <div
                      v-if="capability.capabilities_id.description"
                      class="text-body-1 markdown"
                      v-html="capability.capabilities_id.description"
                    ></div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </template>
  </v-container>
</template>

<script>
/**
 * @typedef { import("#common/types/directus").components["schemas"]["ItemsSectionCapabilities"] } ItemsSectionCapabilities
 * @typedef { import('vue').PropType<ItemsSectionCapabilities> } ItemsSectionCapabilitiesPropType
 */
</script>

<script setup>
defineProps({
  value: {
    required: true,
    /** @type {ItemsSectionCapabilitiesPropType} */
    type: Object
  }
})
</script>
