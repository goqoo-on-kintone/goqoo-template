import config from '../goqoo.config'
type Context = typeof config['environments'][number]

export const context: Context | undefined = config.environments.find((ctx) =>
  Object.values(ctx.appId).some((id) => id === (kintone.app.getId() as number))
)
