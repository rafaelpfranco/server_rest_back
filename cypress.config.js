const { defineConfig } = require('cypress')

require('dotenv').config()

module.exports = defineConfig({
  projectId: 'q7vu1q',
  reporter: 'cypress-mochawesome-reporter',
  env: {
    userEmail: process.env.USER_EMAIL,
    userPassword: process.env.USER_PASSWORD,
  },
  e2e: {
    baseUrl: process.env.BASE_URL || 'https://serverest.dev',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)

      return config
    },
  },
})
