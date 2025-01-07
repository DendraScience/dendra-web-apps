<template>
  <v-container fluid style="position: relative">
    <FetchingProgress :active="isFetching" />

    <v-row>
      <v-col cols="12">
        <v-card
          border="thin"
          class="d-block overflow-auto w-100 border-thin"
          color="background"
          rounded="0"
          style="max-height: calc(100vh - 150px)"
          variant="flat"
        >
          <v-card rounded="0" style="left: 0; position: sticky" variant="flat">
            <v-card-text>
              <v-row align="center" dense>
                <v-col>
                  <h1 class="text-h5 text-sm-h4">Organizations</h1>
                  <FilteredByText
                    :items="filteredByItems"
                    @clear="clearFilters"
                  />
                </v-col>

                <v-col cols="auto">
                  <FiltersMenuButton :is-filtered="!!filteredByItems.length">
                    <FiltersMenuItemIsEnabled v-model.ss="isEnabledFilter" />
                    <FiltersMenuItemIsHidden v-model.ss="isHiddenFilter" />
                  </FiltersMenuButton>

                  <ColumnsMenuButton>
                    <v-list-item
                      v-for="column in table
                        .getAllLeafColumns()
                        .filter(c => c.id !== 'edit')"
                      :key="column.id"
                      :title="column.columnDef.header?.toString()"
                      @click="toggleColumnVisibility(column)"
                    >
                      <template #prepend>
                        <v-list-item-action start>
                          <v-checkbox-btn
                            :model-value="column.getIsVisible()"
                            density="compact"
                          ></v-checkbox-btn>
                        </v-list-item-action>
                      </template>
                    </v-list-item>
                  </ColumnsMenuButton>

                  <NewButton />
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="12" lg="6">
                  <SearchTextField v-model="searchText" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <table class="tan-table tan-table-hover w-100">
            <thead>
              <tr
                v-for="headerGroup in table.getHeaderGroups()"
                :key="headerGroup.id"
                class="bg-surface-light position-sticky top-0"
                style="z-index: 1"
              >
                <th
                  v-for="header in headerGroup.headers"
                  :key="header.id"
                  :colSpan="header.colSpan"
                  :class="header.column.columnDef.meta?.headerClass"
                  class="text-subtitle-2 text-uppercase text-left pa-3 border-b-sm"
                >
                  <FlexRender
                    v-if="!header.isPlaceholder"
                    :render="header.column.columnDef.header"
                    :props="header.getContext()"
                  />&nbsp;<v-icon
                    v-if="header.column.getCanSort()"
                    v-bind="sortIconProps(header.column.getIsSorted())"
                    @click="header.column.getToggleSortingHandler()?.($event)"
                  />
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="row in table.getRowModel().rows" :key="row.id">
                <td
                  v-for="cell in row.getVisibleCells()"
                  :key="cell.id"
                  :class="cell.column.columnDef.meta?.cellClass"
                  class="text-body-2 pa-3 sticky-td border-b-sm"
                  style="word-break: break-all"
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
          @step="stepToPage"
        />
      </v-col>
    </v-row>

    <Teleport :to="LARGE_SIDE_DRAWER_TO">
      <SideDrawerHeader
        :subtitle="editSubtitle"
        :title="editTitle"
        @close="showLargeSideDrawer(false)"
      />

      <EditOrganizationView v-if="editID" :key="editID" />
    </Teleport>
  </v-container>
</template>

<script setup lang="ts">
import type { Organization } from '@buf/dendrascience_api.bufbuild_es/dendra/api/metadata/v3alpha1/organization_pb'
import { ref, shallowRef, watchEffect } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import {
  type Column,
  type SortingState,
  type VisibilityState,
  FlexRender,
  getCoreRowModel,
  useVueTable,
  createColumnHelper
} from '@tanstack/vue-table'
import { useFilters } from '#common/composables/filter'
import { usePager, usePageState } from '#common/composables/pagination'
import { useNotify } from '#common/composables/notify'
import {
  LARGE_SIDE_DRAWER_TO,
  useOverlayOrThrow
} from '#common/composables/overlay'
import {
  createCellFormatters,
  createEditButtonCellFormatter,
  createCreatedAtAccessor,
  createUpdatedAtAccessor,
  sortIconProps
} from '#common/lib/table'
import { createClient } from '@connectrpc/connect'
import { ListOrganizationsRequest_OrderField } from '@buf/dendrascience_api.bufbuild_es/dendra/api/metadata/v3alpha1/organization_request_response_pb'
import { OrganizationService } from '@buf/dendrascience_api.bufbuild_es/dendra/api/metadata/v3alpha1/organization_service_pb'
import { transport } from '#common/lib/dendra-v3'

const { notify } = useNotify()
const { showLargeSideDrawer } = useOverlayOrThrow()
const { pageSize, pageToken } = usePageState()
const {
  applyRouteQueryFilters,
  clearFilters,
  filteredByItems,
  isEnabledFilter,
  isHiddenFilter,
  searchText,
  searchTextDebounced
} = useFilters()

applyRouteQueryFilters()

// IMPORTANT: Initial order and sorting state must match to prevent requerying
const orderByField = ref(ListOrganizationsRequest_OrderField.NAME)
const orderByIsDesc = ref(false)
const sorting = ref<SortingState>([{ id: 'name', desc: false }])

//
// Configure query
//

const client = createClient(OrganizationService, transport)

async function listOrganizations() {
  return client.listOrganizations({
    filter: {
      isEnabled: isEnabledFilter.value,
      isHidden: isHiddenFilter.value,
      searchText: searchTextDebounced.value
    },
    orderBy: {
      field: orderByField.value,
      isDescending: orderByIsDesc.value
    },
    pageSize: pageSize.value,
    pageToken: pageToken.value
  })
}

const { data, error, isError, isFetching, isPending, suspense } = useQuery({
  queryKey: [
    'organizations',
    {
      isEnabledFilter,
      isHiddenFilter,
      orderByField,
      orderByIsDesc,
      pageSize,
      pageToken,
      searchTextDebounced
    }
  ],
  queryFn: () => listOrganizations()
})

//
// Configure table
//

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

const columnHelper = createColumnHelper<Organization>()
const columnVisibility = ref<VisibilityState>({
  id: false,
  fullName: false,
  sortValue: false,
  slug: false,
  email: false,
  url: false,
  createdAt: false,
  createdByName: false,
  createdBySubject: false,
  updatedAt: false,
  updatedByName: false,
  updatedBySubject: false
})
const cellFormatters = createCellFormatters<Organization>()
const createdAtAccessor = createCreatedAtAccessor()
const updatedAtAccessor = createUpdatedAtAccessor()

const editID = ref('')
const editTitle = ref('')
const editSubtitle = ref('')
const editButtonCellFormatter = createEditButtonCellFormatter<Organization>(
  props => {
    editID.value = props.getValue()
    editTitle.value = props.row.getValue('name')
    editSubtitle.value = props.row.getValue('description')
    showLargeSideDrawer(true)
  }
)

watchEffect(() => {
  if (sorting.value.length) {
    orderByIsDesc.value = sorting.value[0].desc

    switch (sorting.value[0].id) {
      case 'id':
        orderByField.value = ListOrganizationsRequest_OrderField.ID
        break
      case 'name':
        orderByField.value = ListOrganizationsRequest_OrderField.NAME
        break
      case 'slug':
        orderByField.value = ListOrganizationsRequest_OrderField.SLUG
        break
      case 'sortValue':
        orderByField.value = ListOrganizationsRequest_OrderField.SORT_VALUE
        break
      case 'email':
        orderByField.value = ListOrganizationsRequest_OrderField.EMAIL
        break
    }
  }
})

const columns = [
  columnHelper.accessor('id', {
    cell: editButtonCellFormatter,
    enableSorting: false,
    header: '',
    id: 'edit'
  }),
  columnHelper.accessor('id', {
    header: 'ID'
  }),
  columnHelper.accessor('name', {
    header: 'Name'
  }),
  columnHelper.accessor('fullName', {
    enableSorting: false,
    header: 'Full Name'
  }),
  columnHelper.accessor('description', {
    cell: cellFormatters.wordTruncate,
    enableSorting: false,
    header: 'Description'
  }),
  columnHelper.accessor('isEnabled', {
    cell: cellFormatters.boolean,
    enableSorting: false,
    header: 'Enabled'
  }),
  columnHelper.accessor('isHidden', {
    cell: cellFormatters.boolean,
    enableSorting: false,
    header: 'Hidden'
  }),
  columnHelper.accessor('sortValue', {
    header: 'Sort Value',
    meta: {
      cellClass: 'text-right',
      headerClass: 'text-right'
    }
  }),
  columnHelper.accessor('slug', {
    header: 'Slug'
  }),
  columnHelper.accessor('email', {
    header: 'Email'
  }),
  columnHelper.accessor('url', {
    enableSorting: false,
    header: 'URL'
  }),
  columnHelper.accessor(row => createdAtAccessor(row), {
    cell: cellFormatters.isoDate,
    enableSorting: false,
    header: 'Created At',
    id: 'createdAt'
  }),
  columnHelper.accessor('modification.createdByName', {
    header: 'Created By Name',
    enableSorting: false,
    id: 'createdByName'
  }),
  columnHelper.accessor('modification.createdBySubject', {
    header: 'Created By Subject',
    enableSorting: false,
    id: 'createdBySubject'
  }),
  columnHelper.accessor(row => updatedAtAccessor(row), {
    cell: cellFormatters.isoDate,
    enableSorting: false,
    header: 'Updated At',
    id: 'updatedAt'
  }),
  columnHelper.accessor('modification.updatedByName', {
    header: 'Updated By Name',
    enableSorting: false,
    id: 'updatedByName'
  }),
  columnHelper.accessor('modification.updatedBySubject', {
    header: 'Updated By Subject',
    enableSorting: false,
    id: 'updatedBySubject'
  })
]

const table = useVueTable({
  get data() {
    return tableData.value
  },
  columns,
  enableSortingRemoval: false,
  getCoreRowModel: getCoreRowModel(),
  manualSorting: true,
  onSortingChange: updaterOrValue => {
    sorting.value =
      typeof updaterOrValue === 'function'
        ? updaterOrValue(sorting.value)
        : updaterOrValue
  },
  state: {
    get columnVisibility() {
      return columnVisibility.value
    },
    get sorting() {
      return sorting.value
    }
  }
})

function toggleColumnVisibility(column: Column<Organization, unknown>) {
  columnVisibility.value = {
    ...columnVisibility.value,
    [column.id]: !column.getIsVisible()
  }
}
</script>
