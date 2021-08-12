require('ts-node').register()
const { default: config } = require('./goqoo.config.ts')
require('dotenv').config()

module.exports = {
  location: 'kintone-settings',
  env: Object.fromEntries(config.environments.map((_) => [_.env, _])),
}
