<template>
  <div class="bg-blue-grey py-8 py-md-16">
    <v-container>
      <v-row
        v-if="value.title || value.paragraph"
        class="mb-md-8"
        justify="center"
      >
        <v-col cols="12" xl="10">
          <SectionTitle v-if="value.title" class="text-center mb-4">
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

      <template v-if="value.differentiators && value.differentiators.length">
        <v-row justify="center">
          <v-col
            v-for="(
              { differentiators_id: differentiator }, i
            ) of value.differentiators"
            :key="i"
            cols="12"
            sm="6"
            lg="4"
          >
            <v-card
              class="fill-height"
              variant="tonal"
              style="position: relative"
            >
              <v-card-item class="pa-10" style="margin-bottom: 100px">
                <h3 v-if="differentiator.title" class="text-h5 text-md-h4 mb-4">
                  {{ differentiator.title }}
                </h3>

                <!-- eslint-disable vue/no-v-html -->
                <div
                  v-if="differentiator.description"
                  class="text-body-1 markdown"
                  v-html="differentiator.description"
                ></div>
              </v-card-item>

              <v-icon
                :icon="differentiator.icon"
                size="256"
                color="white"
                style="
                  opacity: 0.1;
                  position: absolute;
                  right: 0;
                  bottom: -100px;
                "
              />
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-container>
  </div>
</template>

<script setup>
defineProps({
  value: {
    required: true,
    type: Object
  }
})
</script>
