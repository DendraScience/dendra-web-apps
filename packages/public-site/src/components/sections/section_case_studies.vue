<template>
  <div class="my-8 my-md-16">
    <v-container>
      <v-row v-if="value.title || value.paragraph" class="mb-md-8">
        <v-col cols="12" xl="10">
          <SectionTitle v-if="value.title" class="mb-4">
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

      <template v-if="value.case_studies && value.case_studies.length">
        <v-row justify="center">
          <v-col
            v-for="(caseStudy, i) of value.case_studies"
            :key="i"
            cols="12"
            sm="6"
            lg="4"
          >
            <template v-if="typeof caseStudy === 'number'" />

            <template v-else>
              <template v-if="typeof caseStudy.case_studies_id === 'number'" />

              <v-card
                v-else-if="caseStudy.case_studies_id"
                class="fill-height"
                color="blue-grey"
              >
                <v-card-item class="text-body-1 pa-10">
                  {{ caseStudy.case_studies_id.summary }}
                </v-card-item>

                <v-card-actions class="bg-blue-grey-darken-2">
                  <v-btn color="white" size="x-large" variant="text"
                    >Read More</v-btn
                  >
                </v-card-actions>
              </v-card>
            </template>
          </v-col>
        </v-row>
      </template>
    </v-container>
  </div>
</template>

<script setup>
/**
 * @import { PropType } from 'vue'
 * @import { components } from '#common/types/directus'
 */

// HACK: To work around https://github.com/vuejs/language-tools/issues/4899
import { defineProps } from 'vue'

defineProps({
  value: {
    required: true,
    /** @type {PropType<components["schemas"]["ItemsSectionCaseStudies"]>} */
    type: Object
  }
})
</script>
