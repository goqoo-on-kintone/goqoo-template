// @ts-check

/**
 * @typedef {'development' | 'staging' | 'production'} Env
 *
 * @typedef {{
 *  project: number
 *  customer: number
 *  sales_activity: number
 * }} AppId
 *
 * @typedef {{
 *  sales_activity: string
 * }} ApiToken
 */

/**
 * @type {import('goqoo').Config<Env, AppId, ApiToken>}
 */
const config = {
  // uuid: '00ebca53-8540-434b-971b-d0b7c77199cf',
  bundlerType: 'default',
  dtsGen: {
    env: 'development',
    // skip: ['customer'],
  },
  environments: [
    {
      env: 'development',
      domain: 'the-red.cybozu.com',
      appId: {
        project: 148,
        customer: 149,
        sales_activity: 150,
      },
      viewId: {
        project: {
          案件一覧: 2059,
          カスタマイズビュー: 5526168,
        },
      },
    },
    {
      env: 'staging',
      domain: 'the-red.cybozu.com',
      appId: {
        project: 169,
        customer: 170,
        sales_activity: 171,
      },
      guest: 34,
    },
    {
      env: 'production',
      domain: 'the-red.cybozu.com',
      appId: {
        project: 175,
        customer: 176,
        sales_activity: 177,
      },
      // apiToken: {
      //   sales_activity: process.env.API_TOKEN_SALES_ACTIVITY_PRODUCTION,
      // },
    },
  ],
}
module.exports = config
