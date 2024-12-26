import type { CellContext, RowData } from '@tanstack/vue-table'
import { h } from 'vue'
import { VIcon } from 'vuetify/components'
// import { toJson } from '@bufbuild/protobuf'
// import { TimestampSchema } from '@bufbuild/protobuf/wkt'

//AccessorFn<TData>
//
// export function createCreatedAtAccessor<TData extends RowData>() {
//   return (originalRow: TData, index: number) => {
//     return originalRow.modification?.createdAt
//       ? new Date(toJson(TimestampSchema, originalRow.modification.createdAt))
//       : undefined
//   }
// }

export function createBooleanCellFormatter<TData extends RowData>() {
  return (props: CellContext<TData, boolean>) => {
    return props.getValue()
      ? h(VIcon, { color: 'surface-variant', icon: 'mso:toggle_on' })
      : h(VIcon, { color: 'surface-light', icon: 'mso:toggle_off' })
  }
}

export function createISODateCellFormatter<TData extends RowData>() {
  return (props: CellContext<TData, Date | undefined>) => {
    const value = props.getValue()
    return value ? value.toISOString() : ''
  }
}

export function createCellFormatters<TData extends RowData>() {
  return {
    boolean: createBooleanCellFormatter<TData>(),
    isoDate: createISODateCellFormatter<TData>()
  }
}
