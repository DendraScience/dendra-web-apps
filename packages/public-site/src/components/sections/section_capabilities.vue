<template>
  <v-container>
    <v-row v-if="value.title || value.paragraph" class="mb-8">
      <v-col cols="12">
        <SectionTitle class="mb-4">
          {{ value.title }}
        </SectionTitle>
        <p class="text-body-1">
          {{ value.paragraph }}
        </p>
      </v-col>
    </v-row>

    <template v-if="value.capabilities && value.capabilities.length">
      <v-row
        v-for="({ capabilities_id: capability }, i) of value.capabilities"
        :key="i"
      >
        <v-col cols="12">
          <v-card variant="tonal">
            <v-container fluid>
              <v-row align="center">
                <v-col align="center" class="pa-10" cols="auto">
                  <v-img
                    :aspect-ratio="1"
                    cover
                    width="300"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  ></v-img>
                </v-col>

                <v-col class="text-body-1 px-10 pb-10 pa-md-10" cols="12" md="">
                  {{ capability.title }}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script setup>
// import { toRef } from 'vue'
// import { useImgResponsive } from '#common/lib/img'

defineProps({
  value: {
    required: true,
    type: Object
  }
})

// const aspectRatio = 16 / 9
// const imgResp = useImgResponsive(
//   {
//     aspectRatio,
//     value: toRef(props, 'value')
//   },
//   {
//     image: 'background_image',
//     transformation: 'background_transformation'
//   }
// )
</script>
