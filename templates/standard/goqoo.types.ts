// TODO: goqoo本体に持っていく

export type Context<TEnv, TAppIds, TApiTokens> = {
  env: TEnv
  domain: string
  appIds: TAppIds
  apiTokens?: TApiTokens
  guest?: number
}

export type Config<TEnv, TAppIds, TApiTokens> = {
  'bundlerType'?: 'standard' | 'vue' | 'react'
  'dts-gen'?: { env: TEnv }
  'environments': Context<TEnv, TAppIds, TApiTokens>[]
}
