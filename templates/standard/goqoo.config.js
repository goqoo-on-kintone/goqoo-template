// @ts-check

// TODO: goqoo側でdotenv.config()走らせる
require('dotenv').config()

/**
 * @typedef {'development' | 'staging' | 'production'} Env
 *
 * @typedef {{
 *  'project': number
 *  'customer': number
 *  'sales-activity': number
 * }} AppId
 *
 * @typedef {{
 *  'sales-activity'?: string
 * }} ApiToken
 */

/**
 * @type {import('goqoo/src/types/goqoo.types').Config<Env, AppId, ApiToken>}
 */
module.exports = {
  bundlerType: 'standard',
  dtsGen: {
    env: 'development',
    // skip: ['customer'],
  },
  environments: [
    {
      env: 'development',
      domain: 'the-red.cybozu.com',
      appId: {
        'project': 148,
        'customer': 149,
        'sales-activity': 150,
      },
    },
    {
      env: 'staging',
      domain: 'the-red.cybozu.com',
      appId: {
        'project': 169,
        'customer': 170,
        'sales-activity': 171,
      },
      guest: 34,
    },
    {
      env: 'production',
      domain: 'the-red.cybozu.com',
      appId: {
        'project': 175,
        'customer': 176,
        'sales-activity': 177,
      },
      apiToken: {
        'sales-activity': process.env.API_TOKEN_SALES_ACTIVITY_PRODUCTION,
      },
    },
  ],
}
