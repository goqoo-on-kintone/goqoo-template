import { cosmiconfigSync } from 'cosmiconfig'

type Env = {
  name: string
  host: string
  app: { [appName: string]: number }
}

const goqoo = cosmiconfigSync('goqoo').search()
const environments: Env[] | {} | undefined = goqoo && goqoo.config && goqoo.config.environments

if (!Array.isArray(environments)) {
  throw new Error('environments is not defined.')
}

// TODO: 名前はcontext, ctx辺りの方がベター？
export const env = environments.find((e) =>
  Object.values(e.app).some((appId) => appId === (kintone.app.getId() as number))
)
