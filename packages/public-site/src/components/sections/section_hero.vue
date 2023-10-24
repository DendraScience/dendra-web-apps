<template>
  <div>
    <v-img
      :aspect-ratio="aspectRatio"
      :sizes="imgResp.sizes"
      :src="imgResp.src"
      :srcset="imgResp.srcset"
      alt="Background image for the hero section"
      cover
      gradient="to top, rgba(0, 0, 0, .6), rgba(0, 0, 0, .2)"
      max-height="680"
    >
      <v-container
        :style="{ paddingTop: `${APP_BAR_HEIGHT}px` }"
        class="d-flex flex-column h-100 pb-8 pb-md-16"
      >
        <v-row align="center">
          <v-col class="text-white" cols="12" md="8"
            ><h1
              v-if="value.title"
              class="text-h3 text-md-h2 font-weight-medium mt-8 mb-4"
            >
              {{ value.title }}
            </h1>

            <p
              v-if="value.paragraph"
              class="text-h6 text-md-h5 font-weight-regular mb-4"
            >
              {{ value.paragraph }}
            </p>

            <div v-if="value.ctas && value.ctas.length">
              <cta-btn
                v-for="(cta, i) of value.ctas"
                :key="i"
                v-bind="cta.ctas_id"
                class="mr-4 mt-4"
                size="large"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-img>

    <!--
    <v-container class="mt-n16">
      <v-row justify="center">
        <v-col cols="auto">
          <v-card class="pa-4" elevation="4" max-width="1000">
            <v-card-title> What are you looking for? </v-card-title>

            <v-card-subtitle>
              Try our query interface by answering a few questions.
            </v-card-subtitle>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn>Next</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
-->
  </div>
</template>

<script setup>
import { toRef } from 'vue'
import { APP_BAR_HEIGHT } from '#root/lib/consts'
import { useImgResponsive } from '#common/lib/img'

const props = defineProps({
  value: {
    required: true,
    type: Object
  }
})

const aspectRatio = 16 / 9
const imgResp = useImgResponsive(
  {
    aspectRatio,
    value: toRef(props, 'value')
  },
  {
    image: 'background_image',
    transformation: 'background_transformation'
  }
)
</script>
