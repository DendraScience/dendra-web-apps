<template>
  <v-container>
    <v-row v-if="value.title || value.paragraph" class="mb-8">
      <v-col cols="12">
        <SectionTitle class="mb-4">
          {{ value.title }}
        </SectionTitle>

        <p v-if="value.paragraph" class="text-body-1 text-md-h5">
          {{ value.paragraph }}
        </p>
      </v-col>
    </v-row>

    <template v-if="value.capabilities && value.capabilities.length">
      <v-row
        v-for="({ capabilities_id: capability }, i) of value.capabilities"
        :key="i"
      >
        <v-col cols="12">
          <v-card rounded="0" variant="tonal">
            <v-container fluid>
              <v-row align="center">
                <v-col align="center" class="pa-10" cols="auto">
                  <div
                    class="d-flex align-center justify-end"
                    style="position: relative"
                  >
                    <CoverImage
                      v-if="capability.image"
                      :image="capability.image"
                      :sizes="{
                        xs: '300px'
                      }"
                      :transformation="capability.transformation"
                      class="rounded"
                      width="300"
                    >
                    </CoverImage>

                    <v-avatar
                      v-if="capability.icon"
                      class="elevation-2"
                      color="primary"
                      size="64"
                      style="position: absolute; right: -32px"
                    >
                      <v-icon :icon="capability.icon" size="48" />
                    </v-avatar>
                  </div>
                </v-col>

                <v-col class="text-body-1 px-10 pb-10 pa-md-10" cols="12" md="">
                  <h3 v-if="capability.title" class="text-h5 text-md-h4 mb-4">
                    {{ capability.title }}
                  </h3>

                  <!-- eslint-disable vue/no-v-html -->
                  <div
                    v-if="capability.description"
                    class="text-body-1 markdown"
                    v-html="capability.description"
                  ></div>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script setup>
defineProps({
  value: {
    required: true,
    type: Object
  }
})
</script>
