/**
 * @typedef { import("vue").App } App
 */

/**
 * @param  {App} app
 */
export function registerLayouts(app) {
  /** @type { Record<string, App> } */
  const layouts = import.meta.glob('./*.vue', {
    eager: true,
    import: 'default'
  })

  Object.entries(layouts).forEach(([name, layout]) => {
    app.component(name.substring(2, name.length - 4), layout)
  })
}
