module.exports = {
  bundlerType: 'standard', // 'standard', 'vue', 'react'
  env: {
    // TODO: dts-gen, ginue, プログラム内で全て共通化
    development: {
      name: 'development',
      host: 'the-red.cybozu.com',
      app: {
        project: 148,
        customer: 149,
        sales: 150,
      },
    },
    staging: {
      name: 'staging',
      host: 'the-red.cybozu.com',
      app: {
        project: 169,
        customer: 170,
        sales: 171,
      },
      guest: 34,
    },
    production: {
      name: 'production',
      host: 'the-red.cybozu.com',
      app: {
        project: 175,
        customer: 176,
        sales: 177,
      },
    },
  },

  // TODO: import時のrootをどこに置くか？特に何もしなくて良いか？
}
