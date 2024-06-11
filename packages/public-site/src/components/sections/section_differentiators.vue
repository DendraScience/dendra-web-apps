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
            v-for="(differentiator, i) of value.differentiators"
            :key="i"
            cols="12"
            sm="6"
            lg="4"
          >
            <template v-if="typeof differentiator === 'number'" />

            <template v-else>
              <template
                v-if="typeof differentiator.differentiators_id === 'number'"
              />

              <v-card
                v-else-if="differentiator.differentiators_id"
                class="fill-height"
                variant="tonal"
                style="position: relative"
              >
                <v-card-item class="pa-10" style="margin-bottom: 100px">
                  <h3
                    v-if="differentiator.differentiators_id.title"
                    class="text-h5 text-md-h4 mb-4"
                  >
                    {{ differentiator.differentiators_id.title }}
                  </h3>

                  <!-- eslint-disable vue/no-v-html -->
                  <div
                    v-if="differentiator.differentiators_id.description"
                    class="text-body-1 markdown"
                    v-html="differentiator.differentiators_id.description"
                  ></div>
                </v-card-item>

                <v-icon
                  v-if="differentiator.differentiators_id.icon"
                  :icon="differentiator.differentiators_id.icon"
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
            </template>
          </v-col>
        </v-row>
      </template>
    </v-container>
  </div>
</template>

<script>
/**
 * @typedef { import("#common/types/directus").components["schemas"]["ItemsSectionDifferentiators"] } ItemsSectionDifferentiators"
 * @typedef { import('vue').PropType<ItemsSectionDifferentiators> } ItemsSectionDifferentiatorsPropType
 */
</script>

<script setup>
defineProps({
  value: {
    required: true,
    /** @type {ItemsSectionDifferentiatorsPropType} */
    type: Object
  }
})
</script>
