const js = require('@eslint/js')
const cypress = require('eslint-plugin-cypress')
const globals = require('globals')

module.exports = [
  {
    ignores: [
      'node_modules/',
      'cypress/reports/',
      'cypress/screenshots/',
      'cypress/videos/',
      'cypress/downloads/',
      'mochawesome-report/',
      'coverage/',
      'dist/',
      'build/',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.cjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['cypress/**/*.js'],
    plugins: {
      cypress,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...cypress.environments.globals.globals,
      },
    },
    rules: {
      ...cypress.configs.recommended.rules,
    },
  },
]
