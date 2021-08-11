const { cosmiconfigSync } = require('cosmiconfig')
const goqoo = cosmiconfigSync('goqoo').search()
const env = goqoo && goqoo.config && goqoo.config.env

module.exports = {
  location: 'kintone-settings',
  env,
}

console.log(module.exports)
