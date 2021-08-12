import config from '../goqoo.config'

export const context = config.environments.find((e) =>
  Object.values(e.appIds).some((appId) => appId === (kintone.app.getId() as number))
)
