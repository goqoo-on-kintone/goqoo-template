import config from '../goqoo.config'

const context = config.environments
  .filter((ctx) => ctx.domain === location.host)
  .find((ctx) => Object.values(ctx.appId).some((id) => id === (kintone.app.getId() as number)))

export { context }
