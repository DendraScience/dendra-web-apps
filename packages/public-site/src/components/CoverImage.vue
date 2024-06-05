<template>
  <v-img
    :aspect-ratio="aspectRatio"
    :sizes="imgResp.sizes"
    :src="imgResp.src"
    :srcset="imgResp.srcset"
    ><slot />
  </v-img>
</template>

<script>
/**
 * @typedef { import("#common/lib/img").DirectusImage } DirectusImage
 * @typedef { import("#common/lib/img").ImageTransformation } ImageTransformation
 * @typedef { import("#common/lib/img").UseImgResponsiveSizes } UseImgResponsiveSizes
 * @typedef { import('vue').PropType<DirectusImage> } DirectusImagePropType
 * @typedef { import('vue').PropType<ImageTransformation | undefined> } ImageTransformationPropType
 * @typedef { import('vue').PropType<UseImgResponsiveSizes | undefined> } UseImgResponsiveSizesPropType
 */
</script>

<script setup>
import { toRef } from 'vue'
import { useImgResponsive } from '#common/lib/img'

const props = defineProps({
  aspectRatio: {
    default: 1,
    type: Number
  },
  image: {
    required: true,
    /** @type {DirectusImagePropType} */
    type: Object
  },
  sizes: {
    default: undefined,
    /** @type {UseImgResponsiveSizesPropType} */
    type: Object
  },
  transformation: {
    default: undefined,
    /** @type {ImageTransformationPropType} */
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
