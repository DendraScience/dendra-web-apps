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

          <v-col v-else-if="capability.capabilities_id">
            <v-card rounded="0" flat>
              <v-container fluid>
                <v-row>
                  <v-col cols="auto">
                    <CoverImage
                      v-if="
                        capability.capabilities_id.image &&
                        typeof capability.capabilities_id.image !== 'string'
                      "
                      :aspect-ratio="4 / 3"
                      :image="capability.capabilities_id.image"
                      :sizes="{
                        xs: '600px'
                      }"
                      :transformation="
                        capability.capabilities_id.transformation &&
                        typeof capability.capabilities_id.transformation !==
                          'number'
                          ? capability.capabilities_id.transformation
                          : undefined
                      "
                      content-class="text-right ma-2"
                      width="300"
                    >
                      <v-avatar
                        v-if="capability.capabilities_id.icon"
                        color="primary"
                        size="64"
                      >
                        <v-icon
                          :icon="capability.capabilities_id.icon"
                          size="48"
                        />
                      </v-avatar>
                    </CoverImage>
                  </v-col>

                  <v-col cols="12" lg="">
                    <h3
                      v-if="capability.capabilities_id.title"
                      class="text-h6 text-md-h5 mt-2 mb-4 ml-lg-10 font-weight-medium"
                    >
                      {{ capability.capabilities_id.title }}
                    </h3>

                    <!-- eslint-disable vue/no-v-html -->
                    <div
                      v-if="capability.capabilities_id.description"
                      class="text-body-1 markdown ml-lg-10"
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
