require('ts-node').register({ typeCheck: false, transpileOnly: true })
const { default: config } = require('./goqoo.config.ts')
require('dotenv').config()

module.exports = {
  location: 'kintone-settings',
  fileType: 'js',
  alt: true,
  env: Object.fromEntries(config.environments.map((_) => [_.env, { app: _.appId, ..._ }])),
}
