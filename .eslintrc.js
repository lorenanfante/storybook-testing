module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {},
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};