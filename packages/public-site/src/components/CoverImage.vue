<template>
  <v-img
    :aspect-ratio="aspectRatio"
    :sizes="imgResp.sizes"
    :src="imgResp.src"
    :srcset="imgResp.srcset"
    ><slot />
  </v-img>
</template>

<script setup lang="js">
/**
 * @import { PropType } from 'vue'
 * @import { components } from '#common/types/directus'
 * @import { UseImgResponsiveSizes } from '#common/lib/img'
 */

import { toRef } from 'vue'
import { useImgResponsive } from '#common/lib/img'

const props = defineProps({
  aspectRatio: {
    default: 1,
    type: Number
  },
  image: {
    required: true,
    /** @type {PropType<components["schemas"]["Files"]>} */
    type: Object
  },
  sizes: {
    default: undefined,
    /** @type {PropType<UseImgResponsiveSizes | undefined>} */
    type: Object
  },
  transformation: {
    default: undefined,
    /** @type {PropType<components["schemas"]["ItemsImageTransformations"] | undefined>} */
    type: Object
  }
})

const imgResp = useImgResponsive(
  toRef(() => ({
    aspectRatio: props.aspectRatio,
    image: props.image,
    sizes: props.sizes,
    transformation: props.transformation
  }))
)
</script>
