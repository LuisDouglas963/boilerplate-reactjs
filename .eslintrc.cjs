module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:tailwindcss/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react','tailwindcss'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        allow: 'as-needed',
      },
    ],
  },
}
