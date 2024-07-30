module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off',
    'eol-last': ['error', 'always'],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single']
  }
};

