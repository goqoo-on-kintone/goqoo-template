module.exports = {
  bundlerType: 'standard', // 'standard', 'vue', 'react'
  environments: [
    // TODO: dts-gen, ginue, プログラム内で全て共通化
    {
      name: 'development',
      host: '<開発ドメイン>.cybozu.com',
      apps: {
        AppName1: 123,
        AppName2: 246,
      },
    },
    {
      name: '<本番ドメイン>.cybozu.com',
      apps: {
        AppName1: 123,
        AppName2: 246,
      },
    },
  ],
  // TODO: goqoo new時にginuercを一緒に作成（ginue.config.js）

  // TODO: import時のrootをどこに置くか？特に何もしなくて良いか？
}
