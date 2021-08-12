require('ts-node').register({ typeCheck: false, transpileOnly: true })
const { dts } = require('../../../goqoo/src/generator/dts/index.ts')
const { default: config } = require('./goqoo.config.ts')

dts(config)
