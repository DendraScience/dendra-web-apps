<template>
  <div class="bg-light-blue-lighten-5 py-8 py-md-16" style="position: relative">
    <div
      class="d-none d-md-flex justify-end align-end"
      style="
        top: 0;
        bottom: 36px;
        right: -180px;
        opacity: 0.5;
        position: absolute;
        overflow: hidden;
        z-index: 0;
      "
    >
      <SiteLogomark width="680" white />
    </div>

    <v-container>
      <v-row
        v-if="value.title || value.paragraph"
        class="mb-md-8"
        justify="center"
      >
        <v-col cols="12" xl="10" style="z-index: 1">
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

      <template v-if="value.tours && value.tours.length">
        <v-row v-for="({ tours_id: tour }, i) of value.tours" :key="i">
          <v-col class="pb-10" cols="12" xl="10">
            <v-card variant="text">
              <v-card-item>
                <h3 v-if="tour.title" class="text-h5 text-md-h4 mb-4">
                  {{ tour.title }}
                </h3>

                <!-- eslint-disable vue/no-v-html -->
                <div
                  v-if="tour.description"
                  class="text-body-1 markdown"
                  v-html="tour.description"
                ></div>

                <div v-if="tour.ctas && tour.ctas.length">
                  <CtaBtn
                    v-for="(cta, j) of tour.ctas"
                    :key="j"
                    v-bind="cta.ctas_id"
                    class="mr-4 mt-4"
                    variant="flat"
                  />
                </div>
              </v-card-item>
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
