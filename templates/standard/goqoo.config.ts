// TODO: 型定義を追加する

export default {
  'bundlerType': 'standard', // 'standard', 'vue', 'react'
  'dts-gen': {
    env: 'development',
  },
  'environments': [
    // TODO: dts-gen, ginue, プログラム内で全て共通化
    {
      env: 'development',
      domain: 'the-red.cybozu.com',
      app: {
        'project': 148,
        'customer': 149,
        'sales-activity': 150,
      },
    },
    {
      env: 'staging',
      domain: 'the-red.cybozu.com',
      app: {
        'project': 169,
        'customer': 170,
        'sales-activity': 171,
      },
      guest: 34,
    },
    {
      env: 'production',
      domain: 'the-red.cybozu.com',
      app: {
        'project': 175,
        'customer': 176,
        'sales-activity': 177,
      },
    },
  ],

  // TODO: import時のrootをどこに置くか？特に何もしなくて良いか？
}
