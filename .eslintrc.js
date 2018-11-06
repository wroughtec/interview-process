module.exports = {
  extends: ['airbnb', 'plugin:flowtype/recommended', 'prettier', 'prettier/react'],
  plugins: ['flowtype', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'one-var': 0,
    'react/prop-types': 0,
    'jsx-a11y/label-has-for': 0,
    'no-console': 1,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'react/prefer-stateless-function': [1, { ignorePureComponents: true }],
    'react/no-access-state-in-setstate': 0,
    'react/button-has-type': 0,
    'import/prefer-default-export': 0,
    'flowtype/space-after-type-colon': [2, 'always', { allowLineBreak: true }],
    'no-param-reassign': 0
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
};
