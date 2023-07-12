export async function createCustomPageContext({ urlPathname }) {
  const base = `https://${import.meta.env.VITE_DOMAIN}`
  const url = new URL(urlPathname.replace(/\/$/, ''), base)
  const absolute = url.href
  const relative = url.pathname

  return {
    canonicalPaths: {
      base,
      absolute,
      relative
    }
  }
}
