require('dotenv').config()
const config = require('./goqoo.config')

module.exports = {
  location: 'kintone-settings',
  fileType: 'js',
  alt: true,
  env: Object.fromEntries(config.environments.map((obj) => [obj.env, { app: obj.appId, ...obj }])),
}
