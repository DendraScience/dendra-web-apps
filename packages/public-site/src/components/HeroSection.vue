<template>
  <v-img
    :aspect-ratio="aspectRatio"
    :sizes="imgResp.sizes"
    :src="imgResp.src"
    :srcset="imgResp.srcset"
    alt="Background image for the hero section"
    cover
    gradient="to top right, rgba(0, 0, 0, .4), rgba(0, 0, 0, .2)"
    max-height="800"
  >
    <v-container>
      <v-row class="my-6">
        <v-col class="text-h1" cols="12"> </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script setup>
import { ref, toRef } from 'vue'
// import { HERO_GRADIENT, MENU_BAR_HEIGHT } from '#root/lib/consts'
import { useResponsive } from '#common/lib/img'

const props = {
  value: {
    background_image: {
      extension: 'jpg',
      public_id: 'site-hero-section-1_xgusqd'
    }
  }
}

const aspectRatio = ref(16 / 9)
const imgResp = useResponsive(
  {
    aspectRatio,
    source: toRef(props, 'value')
  },
  'background_image'
)
</script>
