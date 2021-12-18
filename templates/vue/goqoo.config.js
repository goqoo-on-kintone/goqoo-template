// @ts-check

/**
 * @type {import('./goqoo.config.types').Config}
 */
const config = {
  bundlerType: 'vue',
  dtsGen: {
    env: 'development',
    // skip: ['customer'],
  },
  environments: [
    {
      env: 'development',
      host: 'the-red.cybozu.com',
      appId: {
        project: 148,
        customer: 149,
        sales_activity: 150,
      },
    },
    {
      env: 'staging',
      host: 'the-red.cybozu.com',
      appId: {
        project: 169,
        customer: 170,
        sales_activity: 171,
      },
    },
    {
      env: 'production',
      host: 'the-red.cybozu.com',
      appId: {
        project: 175,
        customer: 176,
        sales_activity: 177,
      },
    },
  ],
}
module.exports = config
