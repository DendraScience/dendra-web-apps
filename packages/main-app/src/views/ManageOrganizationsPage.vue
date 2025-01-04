<template>
  <v-container fluid style="position: relative">
    <v-progress-linear
      :active="isFetching"
      absolute
      color="info"
      indeterminate
      location="top"
      tile
    />

    <v-row>
      <v-col cols="12">
        <v-card
          border="thin"
          class="d-block overflow-auto w-100 border-thin"
          rounded="0"
          style="max-height: calc(100vh - 150px)"
          variant="flat"
        >
          <v-card style="left: 0; position: sticky" variant="flat">
            <v-card-text>
              <v-row align="center" dense>
                <v-col>
                  <h1 class="text-h5 text-sm-h4">Organizations</h1>

                  <div class="d-flex align-center mt-1">
                    <p class="text-body-2">
                      <span class="text-medium-emphasis text-uppercase"
                        >Filtered By:</span
                      >
                      <span class="mx-1">Not Hidden</span>&<span class="mx-1"
                        >Is Enabled</span
                      >&<span class="mx-1">Place: California Reserve</span>
                    </p>

                    <v-btn
                      :icon="mdiCloseCircle"
                      class="text-medium-emphasis"
                      color="on-surface"
                      density="compact"
                      variant="text"
                    />
                  </div>
                </v-col>

                <v-col cols="auto">
                  <FiltersMenuButton>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </FiltersMenuButton>

                  <ColumnsMenuButton>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ColumnsMenuButton>

                  <NewButton />
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="searchText"
                    :prepend-inner-icon="mdiMagnify"
                    clearable
                    density="compact"
                    hide-details
                    placeholder="Search"
                    rounded
                    variant="outlined"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <table class="w-100" style="border-spacing: 0">
            <thead>
              <tr
                v-for="headerGroup in table.getHeaderGroups()"
                :key="headerGroup.id"
                class="bg-surface position-sticky top-0"
                style="z-index: 1"
              >
                <th
                  v-for="header in headerGroup.headers"
                  :key="header.id"
                  :colSpan="header.colSpan"
                  class="text-subtitle-2 text-uppercase text-left pa-2 border-b-sm"
                >
                  <FlexRender
                    v-if="!header.isPlaceholder"
                    :render="header.column.columnDef.header"
                    :props="header.getContext()"
                  />&nbsp;<v-icon color="surface-light" icon="mso:sort" />
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="row in table.getRowModel().rows" :key="row.id">
                <td
                  v-for="cell in row.getVisibleCells()"
                  :key="cell.id"
                  class="text-body-2 pa-2 sticky-td border-b-sm"
                >
                  <FlexRender
                    :render="cell.column.columnDef.cell"
                    :props="cell.getContext()"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </v-card>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12" align="center" justify="end">
        <TablePagination
          v-model="pageSize"
          :is-next-disabled="isNextDisabled"
          :is-previous-disabled="isPreviousDisabled"
          :step-to-page="stepToPage"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { Organization } from '@buf/dendrascience_api.bufbuild_es/dendra/api/metadata/v3alpha1/organization_pb'
import { ListOrganizationsRequest_OrderField } from '@buf/dendrascience_api.bufbuild_es/dendra/api/metadata/v3alpha1/organization_request_response_pb'
// import type { CellContext } from '@tanstack/vue-table'
// import type { VNode } from 'vue'
import { shallowRef, watchEffect } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { useFilters } from '#common/composables/filter'
import { usePager, usePageState } from '#common/composables/pagination'
import { useNotify } from '#common/composables/notify'
import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
  createColumnHelper
} from '@tanstack/vue-table'
import { mdiCloseCircle, mdiMagnify } from '@mdi/js'
import { createClient } from '@connectrpc/connect'
import { OrganizationService } from '@buf/dendrascience_api.bufbuild_es/dendra/api/metadata/v3alpha1/organization_service_pb'
import { transport } from '#common/lib/dendra-v3'
import { toJson } from '@bufbuild/protobuf'
import { TimestampSchema } from '@bufbuild/protobuf/wkt'
import { createCellFormatters } from '#common/lib/table'

const { pageSize, pageToken } = usePageState()
const { isEnabledFilter, isHiddenFilter, searchText, searchTextDebounced } =
  useFilters()
const { notify } = useNotify()

const client = createClient(OrganizationService, transport)

async function listOrganizations() {
  return client.listOrganizations({
    filter: {
      isEnabled: isEnabledFilter.value,
      isHidden: isHiddenFilter.value,
      searchText: searchTextDebounced.value
    },
    orderBy: {
      field: ListOrganizationsRequest_OrderField.SLUG
    },
    pageSize: pageSize.value,
    pageToken: pageToken.value
  })
}

const { data, error, isError, isFetching, isPending, suspense } = useQuery({
  queryKey: ['organizations', { pageSize, pageToken, searchTextDebounced }],
  queryFn: () => listOrganizations()
})

const { isNextDisabled, isPreviousDisabled, stepToPage } = usePager({
  data,
  isError,
  isPending,
  pageToken
})

const tableData = shallowRef<Organization[]>([])

function rerenderTable() {
  tableData.value = data.value?.organizations || []
}

watchEffect(() => {
  if (!isPending.value) {
    if (isError.value) {
      if (error.value) notify(error.value)
    } else if (data.value) {
      rerenderTable()
    }
  }
})

await suspense()

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

const columns = [
  columnHelper.accessor('name', {
    header: 'Name'
    // cell: info => info.getValue(),
  }),
  columnHelper.accessor('description', {
    header: 'Description',
    cell: props => truncateText(props.getValue())
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

const table = useVueTable({
  get data() {
    return tableData.value
  },
  columns,
  getCoreRowModel: getCoreRowModel()
})
</script>
