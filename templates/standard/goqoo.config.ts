// TODO: from 'goqoo' にする
import type { Config } from '../../../goqoo/src/types/goqoo.types'
// TODO: goqoo側でdotenv.config()走らせる
import dotenv from 'dotenv'
dotenv.config()

export type Env = 'development' | 'staging' | 'production'
export type AppId = {
  'project': number
  'customer': number
  'sales-activity': number
}
export type ApiToken = {
  'sales-activity'?: string
}

const config: Config<Env, AppId, ApiToken> = {
  bundlerType: 'standard',
  dtsGen: {
    env: 'development',
    skip: ['customer'],
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

export default config
