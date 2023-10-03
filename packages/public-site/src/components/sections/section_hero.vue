<template>
  <v-img
    :aspect-ratio="aspectRatio"
    :sizes="imgResp.sizes"
    :src="imgResp.src"
    :srcset="imgResp.srcset"
    alt="Background image for the hero section"
    cover
    gradient="to top, rgba(0, 0, 0, .6), rgba(0, 0, 0, .2)"
    max-height="800"
  >
    <v-container
      :style="{ paddingTop: `${APP_BAR_HEIGHT}px` }"
      class="d-flex flex-column h-100 pb-16"
    >
      <v-row align="center">
        <v-col class="text-white" cols="12" md="8"
          ><h1
            v-if="value.title"
            class="text-h3 text-md-h2 font-weight-regular mb-4"
          >
            {{ value.title }}
          </h1>

          <p v-if="value.paragraph" class="text-body-1 text-md-h5 mb-4">
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
