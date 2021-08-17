// @ts-check

/**
 * @typedef {'development' | 'staging' | 'production'} Env
 *
 * @typedef {{
 *  'app': number
 * }} AppId
 *
 * @typedef {{
 *  'app'?: string
 * }} ApiToken
 */

/**
 * @type {import('goqoo/src/types/goqoo.types').Config<Env, AppId, ApiToken>}
 */
const config = {
  bundlerType: 'vue',
  environments: [],
}
module.exports = config
