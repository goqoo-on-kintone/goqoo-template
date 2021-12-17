export type Env = 'development' | 'staging' | 'production'

export type AppId = {
  project: number // 案件管理
  customer: number // 顧客管理
  sales_activity: number // 活動履歴
}

export type ViewId = {
  project: {
    案件一覧: number
    カスタマイズビュー: number
  }
}

export type Context = {
  env: Env
  host: string
  appId: AppId
  viewId?: ViewId
  guest?: number
}

export type Config = {
  bundlerType: 'default' | 'react' | 'vue'
  dtsGen: { env: Env; skip?: string[] }
  environments: Context[]
}
