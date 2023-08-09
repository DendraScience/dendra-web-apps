export function registerLayouts(app) {
  const layouts = import.meta.globEager('./*.vue')

  Object.entries(layouts).forEach(([name, layout]) => {
    app.component(name.substring(2, name.length - 4), layout?.default)
  })
}
