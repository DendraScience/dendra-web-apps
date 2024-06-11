<template>
  <div
    class="bg-light-blue-lighten-5 py-8 py-md-16 section-border-bottom"
    style="position: relative"
  >
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
        <v-row v-for="(tour, i) of value.tours" :key="i">
          <template v-if="typeof tour === 'number'" />

          <template v-else>
            <template v-if="typeof tour.tours_id === 'number'" />

            <v-col v-else-if="tour.tours_id" class="pb-10" cols="12" xl="10">
              <v-card variant="text">
                <v-card-item>
                  <h3
                    v-if="tour.tours_id.title"
                    class="text-h5 text-md-h4 mb-4"
                  >
                    {{ tour.tours_id.title }}
                  </h3>

                  <!-- eslint-disable vue/no-v-html -->
                  <div
                    v-if="tour.tours_id.description"
                    class="text-body-1 markdown"
                    v-html="tour.tours_id.description"
                  ></div>

                  <div v-if="tour.tours_id.ctas && tour.tours_id.ctas.length">
                    <template v-for="(cta, j) of tour.tours_id.ctas" :key="j">
                      <template v-if="typeof cta === 'number'" />

                      <template v-else>
                        <template v-if="typeof cta.ctas_id === 'number'" />

                        <CtaBtn
                          v-else-if="cta.ctas_id"
                          :value="cta.ctas_id"
                          class="mr-4 mt-4"
                          variant="flat"
                        />
                      </template>
                    </template>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </template>
    </v-container>
  </div>
</template>

<script>
/**
 * @typedef { import("#common/types/directus").components["schemas"]["ItemsSectionTours"] } ItemsSectionTours
 * @typedef { import('vue').PropType<ItemsSectionTours> } ItemsSectionToursPropType
 */
</script>

<script setup>
defineProps({
  value: {
    required: true,
    /** @type {ItemsSectionToursPropType} */
    type: Object
  }
})
</script>
