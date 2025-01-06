import '@tanstack/vue-table'

export {}

declare module '@tanstack/vue-table' {
  interface ColumnMeta<> {
    cellClass: string
    headerClass: string
  }
}
