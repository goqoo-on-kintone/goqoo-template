const { cosmiconfigSync } = require('cosmiconfig')
const goqoo = cosmiconfigSync('goqoo').search()
const environments = goqoo && goqoo.config && goqoo.config.environments

module.exports = {
  location: 'kintone-settings',
  // TODO: envオブジェクトに変換
  // env,
}

console.log(module.exports)
