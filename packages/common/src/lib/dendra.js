import qs from 'qs'

function defaultHeaders() {
  return {
    'Content-Type': 'application/json'
  }
}

export class DendraClient {
  constructor(options) {
    Object.assign(this, options)
  }

  async _get(input, query) {
    const controller = new AbortController()
    const id = setTimeout(() => controller.abort(), 10000)
    const init = {
      cache: 'no-cache',
      headers: defaultHeaders(),
      method: 'GET',
      mode: 'cors',
      signal: controller.signal
    }

    let str = this.url
    if (!str.endsWith('/') && !input.startsWith('/')) str += '/'
    str += input
    if (query) str += '?' + qs.stringify(query)

    try {
      const resp = await fetch(str, init)
      if (!resp.ok) {
        return {
          failed: true,
          status: resp.status
        }
      }

      return await resp.json()
    } catch (err) {
      return {
        error: err.message,
        failed: true
      }
    } finally {
      clearTimeout(id)
    }
  }

  find(path, query) {
    return this._get(path, query)
  }

  get(path, id) {
    return this._get(`${path}/${id}`, query)
  }
}

export const dendraClient = new DendraClient({
  url: import.meta.env.VITE_DENDRA_API_URL
})
