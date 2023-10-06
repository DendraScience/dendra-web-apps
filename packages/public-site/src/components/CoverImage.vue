<template>
  <v-img
    :aspect-ratio="aspectRatio"
    :sizes="imgResp.sizes"
    :src="imgResp.src"
    :srcset="imgResp.srcset"
    ><slot />
  </v-img>
</template>

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
    type: Object
  },
  keys: {
    default: undefined,
    type: Object
  },
  sizes: {
    default: undefined,
    type: Object
  },
  transformation: {
    default: undefined,
    type: Object
  }
})

const imgResp = useImgResponsive(
  {
    aspectRatio: toRef(props, 'aspectRatio'),
    image: toRef(props, 'image'),
    transformation: toRef(props, 'transformation')
  },
  props.keys,
  props.sizes
)
</script>
