import config from '../goqoo.config'

export const context = config.environments.find((ctx) =>
  Object.values(ctx.appId).some((id) => id === (kintone.app.getId() as number))
)
