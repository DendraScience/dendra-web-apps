<template>
  <v-container fluid>
    <!-- <v-row align="center" dense> -->
    <!-- </v-row> -->

    <v-row>
      <v-col cols="12">
        <div class="sticky-table-wrapper">
          <v-card class="pa-4" flat style="left: 0; position: sticky">
            <v-row align="center">
              <v-col>
                <h1 class="text-h5 text-sm-h4">Organizations</h1>

                <v-btn @click="() => (testHeader = 'Hello')">Do It</v-btn>
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

          <table class="sticky-table">
            <thead>
              <tr
                v-for="headerGroup in table.getHeaderGroups()"
                :key="headerGroup.id"
              >
                <th
                  v-for="header in headerGroup.headers"
                  :key="header.id"
                  :colSpan="header.colSpan"
                  class="text-left sticky-th"
                >
                  <FlexRender
                    v-if="!header.isPlaceholder"
                    :render="header.column.columnDef.header"
                    :props="header.getContext()"
                  />
                </th>
              </tr>
            </thead>
            <!--
            <thead>
              <tr>
                <th class="text-left sticky-th">Name</th>
                <th class="text-left sticky-th">Description</th>
                <th class="text-left sticky-th">Enabled</th>
                <th class="text-left sticky-th">Hidden</th>
                <th class="text-left sticky-th">Slug</th>
                <th class="text-left sticky-th">Member Access</th>
                <th class="text-left sticky-th">Public Access</th>
                <th class="text-left sticky-th">Time Zone</th>
                <th class="text-left sticky-th">Created By</th>
              </tr>
            </thead>
 -->

            <tbody>
              <tr v-for="row in table.getRowModel().rows" :key="row.id">
                <td
                  v-for="cell in row.getVisibleCells()"
                  :key="cell.id"
                  class="sticky-td px-2"
                >
                  <FlexRender
                    :render="cell.column.columnDef.cell"
                    :props="cell.getContext()"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { Organization } from '@buf/dendrascience_api.bufbuild_es/dendra/api/metadata/v3alpha1/organization_pb'
// import type { CellContext } from '@tanstack/vue-table'
// import type { VNode } from 'vue'
import { ref } from 'vue'
// import { VIcon } from 'vuetify/components'
import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
  createColumnHelper
} from '@tanstack/vue-table'
import { mdiMagnify, mdiPlus } from '@mdi/js'
import { toJson } from '@bufbuild/protobuf'
// import { DurationSchema, TimestampSchema } from '@bufbuild/protobuf/wkt'
import { TimestampSchema } from '@bufbuild/protobuf/wkt'
import { createCellFormatters } from '#common/lib/table'
import { generateOrganization } from '#root/lib/fake'

const search = ref('')

function truncateText(text: string) {
  text = text.trim()
  const words = text.split(' ')

  return words.length > 10 ? words.slice(0, 10).join(' ') + '...' : text
}

const columnHelper = createColumnHelper<Organization>()
const cellFormatters = createCellFormatters<Organization>()

// ColumnDefTemplate<CellContext<TData, TValue>>;
// function cellBoolean<TData>(props: CellContext<TData, boolean>): VNode {
//   return props.getValue()
//     ? h(VIcon, { color: 'surface-variant', icon: 'mso:toggle_on' })
//     : h(VIcon, { color: 'surface-light', icon: 'mso:toggle_off' })
// }

const testHeader = ref('Hidden')

const columns = [
  columnHelper.accessor('name', {
    header: 'Name'
    // cell: info => info.getValue(),
  }),
  columnHelper.accessor('description', {
    header: 'Description',
    cell: props => truncateText(props.getValue()) + testHeader.value
  }),
  columnHelper.accessor('isEnabled', {
    header: 'Enabled',
    cell: cellFormatters.boolean
  }),
  columnHelper.accessor('isHidden', {
    header: 'Hidden',
    cell: cellFormatters.boolean
  }),
  columnHelper.accessor(
    row => {
      return row.modification?.createdAt
        ? new Date(toJson(TimestampSchema, row.modification.createdAt))
        : undefined
    },
    {
      header: 'Created At',
      cell: cellFormatters.isoDate
    }
  )
  // columnHelper.group({
  //   header: 'Name',
  //   footer: props => props.column.id,
  //   columns: [
  //     columnHelper.accessor('firstName', {
  //       cell: info => info.getValue(),
  //       footer: props => props.column.id
  //     }),
  //     columnHelper.accessor(row => row.lastName, {
  //       id: 'lastName',
  //       cell: info => info.getValue(),
  //       header: () => 'Last Name',
  //       footer: props => props.column.id
  //     })
  //   ]
  // }),
  // columnHelper.group({
  //   header: 'Info',
  //   footer: props => props.column.id,
  //   columns: [
  //     columnHelper.accessor('age', {
  //       header: () => 'Age',
  //       footer: props => props.column.id
  //     }),
  //     columnHelper.group({
  //       header: 'More Info',
  //       columns: [
  //         columnHelper.accessor('visits', {
  //           header: () => 'Visits',
  //           footer: props => props.column.id
  //         }),
  //         columnHelper.accessor('status', {
  //           header: 'Status',
  //           footer: props => props.column.id
  //         }),
  //         columnHelper.accessor('progress', {
  //           header: 'Profile Progress',
  //           footer: props => props.column.id
  //         })
  //       ]
  //     })
  //   ]
  // })
]

// const headers = [
//   { title: 'Name', key: 'name' },
//   { title: 'Description', key: 'description', sortable: false },
//   { title: 'Enabled', key: 'isEnabled' },
//   { title: 'Hidden', key: 'isHidden' },
//   { title: 'Slug', key: 'slug' },
//   { title: 'Member Access', key: 'accessLevels.memberLevel' },
//   { title: 'Member Access', key: 'accessLevels.memberLevel' },
//   { title: 'Default Timezone', key: 'operationalSettings.defaultTimeZone' },
//   { title: 'Created by', key: 'modification.createdBy' }
// ]

const defaultData = Array(1000)
  .fill(0)
  .map(() => generateOrganization())

const dataRef = ref(defaultData)

// const rerender = () => {
//   data.value = defaultData
// }

const table = useVueTable({
  data: dataRef,
  columns,
  getCoreRowModel: getCoreRowModel()
})

// if (items[0].modification?.createdAt) {
//   console.log('>>>', toJson(TimestampSchema, items[0].modification?.createdAt))
// }

// if (items[0].operationalSettings?.sampleInterval) {
//   console.log(
//     '>>>',
//     toJson(DurationSchema, items[0].operationalSettings?.sampleInterval)
//   )
// }
</script>

<style>
.sticky-table-wrapper {
  width: 100%;
  max-height: calc(100vh - 200px);
  overflow: auto;
  display: block;
  /*  overflow-y: auto;*/
}

.sticky-table {
  /*  display: block;*/
  /*  table-layout: fixed;*/
  /*  width: 100%;*/
  /*  background: green;*/

  width: 100%;
  /*  overflow-x: auto;*/
  /*  overflow-y: hidden;*/
  /*  display: block;*/
  /*  height: 2000px;*/
  /*  overflow: auto;*/
}

.sticky-th {
  position: -webkit-sticky;
  position: sticky;
  /*  top: 64px;*/
  top: 0;
  /*  width: 200px;*/
  background: blue;
}

.sticky-td {
  /*  text-wrap: nowrap;*/
  /*  width: 200px;*/
}
</style>
