<template>
  <img :src="white ? logoWhite : logoColor" alt="Site logo" />
</template>

<script setup>
import logoColor from '#branding/assets/site-logomark-color.svg'
import logoWhite from '#branding/assets/site-logomark-white.svg'

defineProps({
  white: {
    default: false,
    type: Boolean
  }
})
</script>
