module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // eslint-plugin-prettier
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        paths: ['./src'],
      },
    },
  },
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['css', 'tw'] }],
    'react/prop-types': ['off'],
  },
  globals: {
    PUBLIC_URL: 'readonly',
    NODE_ENV: 'readonly',
  },
};
