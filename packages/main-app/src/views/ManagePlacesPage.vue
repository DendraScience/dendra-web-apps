<template>
  <v-container fluid>
    <!-- <v-row align="center" dense> -->
    <!-- </v-row> -->

    <v-row>
      <v-col cols="12">
        <v-table fixed-header height="1000" hover>
          <template #wrapper>
            <v-card class="pa-4" flat style="left: 0; position: sticky">
              <v-row>
                <v-col>
                  <h1 class="text-h5 text-sm-h4">Organizations</h1>
                </v-col>

                <v-col cols="auto">
                  <v-btn
                    :prepend-icon="mdiPlus"
                    class="text-none ma-1"
                    rounded="lg"
                    slim
                    size="small"
                    variant="flat"
                    >New organization</v-btn
                  >
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" xl="6">
                  <v-text-field
                    v-model="search"
                    :prepend-inner-icon="mdiMagnify"
                    density="comfortable"
                    hide-details
                    placeholder="Search"
                    rounded
                    variant="outlined"
                  />
                </v-col>
              </v-row>
            </v-card>

            <div class="v-table__wrapper">
              <table>
                <thead>
                  <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Description</th>
                    <th class="text-left">Enabled</th>
                    <th class="text-left">Hidden</th>
                    <th class="text-left">Slug</th>
                    <th class="text-left">Member Access</th>
                    <th class="text-left">Public Access</th>
                    <th class="text-left">Time Zone</th>
                    <th class="text-left">Created By</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="item in items" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>
                      {{ truncateText(item.description) }}
                    </td>
                    <td>{{ item.isEnabled }}</td>
                    <td>{{ item.isHidden }}</td>
                    <td>{{ item.slug }}</td>
                    <td>
                      {{ item.accessLevels?.memberLevel }}
                    </td>
                    <td>
                      {{ item.accessLevels?.publicLevel }}
                    </td>
                    <td>
                      {{ item.operationalSettings?.defaultTimeZone }}
                    </td>
                    <td>
                      {{ item.modification?.createdBy }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { mdiMagnify, mdiPlus } from '@mdi/js'
import { generateOrganization } from '#root/lib/fake'

const search = ref('')

function truncateText(text: string) {
  text = text.trim()
  const words = text.split(' ')

  return words.length > 10 ? words.slice(0, 10).join(' ') + '...' : text
}

const items = Array(1000)
  .fill(0)
  .map(() => generateOrganization())
</script>
