module.exports = {
  env: { browser: true },
  extends: ['standard', 'plugin:import/errors', 'plugin:vue/base', 'prettier'],
  plugins: ['prettier'],
  globals: { kintone: true },
  parserOptions: { ecmaVersion: 2019 },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    // 全角スペースはテンプレート文字列内のみ認める
    'no-irregular-whitespace': ['error', { skipTemplates: true }],
    'no-new': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    // importだけでなくrequireの無効パスもエラー
    'node/no-missing-require': 'error',
    'prettier/prettier': 'error',
  },
}
