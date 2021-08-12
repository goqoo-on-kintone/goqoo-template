// TODO: goqoo本体に持っていく

export type Context<TEnv, TAppId, TApiToken> = {
  env: TEnv
  domain: string
  appId: TAppId
  apiToken?: TApiToken
  guest?: number
}

export type Config<TEnv, TAppId, TApiToken> = {
  'bundlerType'?: 'standard' | 'vue' | 'react'
  'dts-gen'?: { env: TEnv }
  'environments': Context<TEnv, TAppId, TApiToken>[]
}
