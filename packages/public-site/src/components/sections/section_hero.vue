<template>
  <div>
    <v-img
      :aspect-ratio="aspectRatio"
      :sizes="imgResp.sizes"
      :src="imgResp.src"
      :srcset="imgResp.srcset"
      alt="Background image for the hero section"
      class="section-hero-img"
      cover
      gradient="to top, rgba(0, 0, 0, .6), rgba(0, 0, 0, .2)"
    >
      <v-container
        :style="{ paddingTop: `${APP_BAR_HEIGHT}px` }"
        class="d-flex flex-column h-100 pb-16"
      >
        <v-row align="center" justify="center">
          <v-col class="text-white text-center" cols="12" xl="10"
            ><h1
              v-if="value.title"
              class="text-h3 text-md-h2 font-weight-medium mt-4 mb-4"
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
              <template v-for="(cta, i) of value.ctas" :key="i">
                <template v-if="typeof cta === 'number'" />

                <template v-else>
                  <template v-if="typeof cta.ctas_id === 'number'" />

                  <CtaBtn
                    v-else-if="cta.ctas_id"
                    :value="cta.ctas_id"
                    class="mr-4 mt-4"
                    size="large"
                  />
                </template>
              </template>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-img>

    <v-container class="mt-n16">
      <v-row>
        <v-col cols="12">
          <v-card class="pa-4 mx-auto" elevation="4" max-width="800">
            <v-card-item>
              <v-alert
                v-if="organizations.failed"
                type="warning"
                title="Our systems are offline."
                text="Our apologies. We may be performing system maintenance or
            experiencing technical difficulties at this time."
                variant="outlined"
              ></v-alert>

              <v-autocomplete
                v-else
                id="section_hero_autocomplete_1"
                v-model="orgSelection"
                :disabled="!orgItems"
                :items="orgItems"
                :loading="organizations.loading"
                append-inner-icon="corporate_fare"
                auto-select-first
                item-title="title"
                item-value="slug"
                menu-icon=""
                placeholder="Select an organization"
                variant="outlined"
              ></v-autocomplete>
            </v-card-item>

            <v-card-actions v-if="organizations.failed">
              <v-btn :href="HREF_STATUS_PAGE" color="warning" target="_blank"
                >System Status Page</v-btn
              >
            </v-card-actions>

            <v-card-actions v-else>
              <v-btn
                :disabled="!orgSelection"
                :href="
                  orgSelection
                    ? `${HREF_LEGACY_APP}orgs/${orgSelection}/datastreams?faceted=true&scheme=dq`
                    : undefined
                "
                >Data Query</v-btn
              >
              <v-btn
                :disabled="!orgSelection"
                :href="
                  orgSelection
                    ? `${HREF_LEGACY_APP}orgs/${orgSelection}/status`
                    : undefined
                "
                >Station Status</v-btn
              >
              <v-btn
                :disabled="!orgSelection"
                :href="
                  orgSelection
                    ? `${HREF_LEGACY_APP}orgs/${orgSelection}`
                    : undefined
                "
                class="d-none d-sm-flex"
                >Overview</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
/**
 * @typedef { import("#common/lib/dendra").DendraV2ClientFetchReturn } DendraV2ClientFetchReturn
 * @typedef { import("#common/types/directus").components["schemas"]["ItemsSectionHero"] } ItemsSectionHero
 * @typedef { import('vue').PropType<ItemsSectionHero> } ItemsSectionHeroPropType
 */
</script>

<script setup>
import { computed, onMounted, toRef } from 'vue'
import {
  APP_BAR_HEIGHT,
  HREF_LEGACY_APP,
  HREF_STATUS_PAGE
} from '#root/lib/consts'
import { dendraV2Client } from '#common/lib/dendra-v2'
import { useImgResponsive } from '#common/lib/img'

const props = defineProps({
  value: {
    required: true,
    /** @type {ItemsSectionHeroPropType} */
    type: Object
  }
})

const aspectRatio = 16 / 9
const imgResp = useImgResponsive(
  toRef(() => ({
    aspectRatio,
    image:
      props.value.background_image &&
      typeof props.value.background_image !== 'string'
        ? props.value.background_image
        : undefined,
    transformation:
      props.value.background_transformation &&
      typeof props.value.background_transformation !== 'number'
        ? props.value.background_transformation
        : undefined
  }))
)

const organizations = toRef(
  /** @type {DendraV2ClientFetchReturn} **/ ({ loading: true })
)
const orgItems = computed(() => {
  return organizations.value.data && Array.isArray(organizations.value.data)
    ? organizations.value.data.map(item => ({
        title: `${item.name} (${item.slug})`,
        ...item
      }))
    : []
})
const orgSelection = toRef(undefined)

onMounted(async () => {
  organizations.value = await dendraV2Client.find('organizations', {
    is_enabled: true,
    is_hidden: false,
    $select: ['_id', 'name', 'slug'],
    $sort: { name: 1, _id: 1 }
  })
})
</script>
