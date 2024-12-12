import type { App } from 'vue'

export function registerLayouts(app: App) {
  const layouts: Record<string, App> = import.meta.glob('./*.vue', {
    eager: true,
    import: 'default'
  })

  Object.entries(layouts).forEach(([name, layout]) => {
    app.component(name.substring(2, name.length - 4), layout)
  })
}
