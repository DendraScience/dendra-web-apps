<template>
  <div>
    <v-container>
      <v-row
        v-if="value.title || value.paragraph"
        class="mb-md-8"
        justify="center"
      >
        <v-col cols="12" xl="8">
          <SectionTitle v-if="value.title" class="mb-4">
            {{ value.title }}
          </SectionTitle>

          <p v-if="value.paragraph" class="text-body-1 text-md-h5">
            {{ value.paragraph }}
          </p>
        </v-col>
      </v-row>

      <template v-if="value.case_studies && value.case_studies.length">
        <v-row justify="center">
          <v-col
            v-for="({ case_studies_id: caseStudy }, i) of value.case_studies"
            :key="i"
            cols="12"
            sm="6"
            lg="4"
          >
            <v-card class="fill-height" color="blue-grey">
              <v-card-item class="text-body-1 pa-10">
                {{ caseStudy.summary }}
              </v-card-item>

              <v-card-actions class="bg-blue-grey-darken-2">
                <v-btn color="white" size="x-large" variant="text"
                  >Read More</v-btn
                >
              </v-card-actions>
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
