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
 * @type {import('goqoo').Config<Env, AppId, ApiToken>}
 */
const config = {
  bundlerType: 'react',
  environments: [],
}
module.exports = config
