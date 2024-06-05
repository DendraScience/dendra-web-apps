/**
 * @typedef { import("pino").Logger } Logger
 */

import qs from 'qs'
import { logger } from './logger'
import { errToString } from './utils'

/**
 * @return {{[name: string]: string}} [description]
 */
function defaultHeaders() {
  return {
    'Content-Type': 'application/json'
  }
}

/**
 * @typedef {object} DendraClientOptions
 * @property {boolean} dev
 * @property {string} url
 * @property {Logger} [logger]
 */

/**
 * @typedef {object} DendraClientFetchReturn
 * @property {boolean} [loading]
 * @property {boolean} [failed]
 * @property {number} [status]
 * @property {string} [error]
 * @property {object | object[]} [data]
 */

/**
 * @typedef {Promise<DendraClientFetchReturn>} DendraClientAsyncFetchReturn
 */

export class DendraClient {
  /**
   * @param {DendraClientOptions} [options]
   */
  constructor(options = { dev: false, url: '' }) {
    this.dev = options.dev
    this.logger = options.logger
    this.url = options.url
  }

  /**
   * @param  {string} input
   * @param  {object} [query]
   * @return {DendraClientAsyncFetchReturn}
   */
  async _get(input, query) {
    const { dev, logger } = this

    if (dev && logger) logger.info({ input, query }, 'DendraClient _get')

    const controller = new AbortController()
    const id = setTimeout(() => controller.abort(), 10000)
    /** @type {RequestInit} */
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
      if (logger) logger.error(err, 'DendraClient _get error')

      return {
        error: errToString(err),
        failed: true
      }
    } finally {
      clearTimeout(id)
    }
  }

  /**
   * Find one or more resources.
   * @param  {string} path
   * @param  {object} [query]
   * @return {DendraClientAsyncFetchReturn}
   */
  find(path, query) {
    return this._get(path, query)
  }

  /**
   * Get a resource by identifier.
   * @param  {string} path
   * @param  {string} id
   * @param  {object} [query]
   * @return {DendraClientAsyncFetchReturn}
   */
  get(path, id, query) {
    return this._get(`${path}/${id}`, query)
  }
}

export const dendraClient = new DendraClient({
  dev: import.meta.env.DEV,
  logger,
  url: import.meta.env.VITE_DENDRA_API_URL
})
