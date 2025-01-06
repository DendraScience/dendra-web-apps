import type { SortDirection, CellContext, RowData } from '@tanstack/vue-table'
import type { ModificationDetails } from '@buf/dendrascience_api.bufbuild_es/dendra/api/metadata/v3alpha1/types_pb'
import { h } from 'vue'
import { VBtn, VIcon } from 'vuetify/components'
import {
  mdiSortReverseVariant,
  mdiSortVariant,
  mdiSortVariantOff
} from '@mdi/js'
import { toJson } from '@bufbuild/protobuf'
import { TimestampSchema } from '@bufbuild/protobuf/wkt'

//
// Accessors
//

interface Modifiable {
  modification?: ModificationDetails
}

export function createCreatedAtAccessor() {
  return (row: Modifiable) => {
    return row.modification?.createdAt
      ? new Date(toJson(TimestampSchema, row.modification.createdAt))
      : undefined
  }
}

export function createUpdatedAtAccessor() {
  return (row: Modifiable) => {
    return row.modification?.updatedAt
      ? new Date(toJson(TimestampSchema, row.modification.updatedAt))
      : undefined
  }
}

//
// Formatters
//

export function createBooleanCellFormatter<TData extends RowData>() {
  return (props: CellContext<TData, boolean>) => {
    return props.getValue()
      ? h(VIcon, { color: 'surface-variant', icon: 'mso:toggle_on' })
      : h(VIcon, { color: 'surface-light', icon: 'mso:toggle_off' })
  }
}

export function createEditCellFormatter<TData extends RowData>() {
  return (props: CellContext<TData, string>) => {
    return h(VBtn, {
      class: 'text-none',
      size: 'x-small',
      rounded: 'pill',
      text: 'Edit',
      variant: 'tonal'
    })
  }
}

export function createISODateCellFormatter<TData extends RowData>() {
  return (props: CellContext<TData, Date | undefined>) => {
    const value = props.getValue()
    return value ? value.toISOString() : ''
  }
}

export function createWordTruncateCellFormatter<TData extends RowData>(
  count: number
) {
  return (props: CellContext<TData, string>) => {
    let value = props.getValue()
    if (value) {
      value = value.trim()
      const words = value.split(' ')
      return words.length > count
        ? words.slice(0, count).join(' ') + '...'
        : value
    }
  }
}

export function createCellFormatters<TData extends RowData>() {
  return {
    boolean: createBooleanCellFormatter<TData>(),
    edit: createEditCellFormatter<TData>(),
    isoDate: createISODateCellFormatter<TData>(),
    wordTruncate: createWordTruncateCellFormatter<TData>(10)
  }
}

//
// Helpers
//

export function sortIconProps(value: false | SortDirection) {
  if (value === false) {
    return { color: 'disabled', icon: mdiSortVariantOff }
  }
  switch (value) {
    case 'asc':
      return { color: 'primary', icon: mdiSortReverseVariant }
    case 'desc':
      return { color: 'primary', icon: mdiSortVariant }
  }
}
