// TODO: from 'goqoo' にする
import type { Config } from './goqoo.types'
// TODO: goqoo側でdotenv.config()走らせる
import dotenv from 'dotenv'
dotenv.config()

export type Env = 'development' | 'staging' | 'production'
export type AppIds = {
  'project': number
  'customer': number
  'sales-activity': number
}
export type ApiTokens = {
  'sales-activity'?: string
}

const config: Config<Env, AppIds, ApiTokens> = {
  'bundlerType': 'standard',
  'dts-gen': {
    env: 'development',
  },
  'environments': [
    {
      env: 'development',
      domain: 'the-red.cybozu.com',
      appIds: {
        'project': 148,
        'customer': 149,
        'sales-activity': 150,
      },
    },
    {
      env: 'staging',
      domain: 'the-red.cybozu.com',
      appIds: {
        'project': 169,
        'customer': 170,
        'sales-activity': 171,
      },
      guest: 34,
    },
    {
      env: 'production',
      domain: 'the-red.cybozu.com',
      appIds: {
        'project': 175,
        'customer': 176,
        'sales-activity': 177,
      },
      apiTokens: {
        'sales-activity': process.env.API_TOKEN_SALES_ACTIVITY_PRODUCTION,
      },
    },
  ],
}

export default config
