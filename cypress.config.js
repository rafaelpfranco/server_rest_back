const { defineConfig } = require('cypress')

require('dotenv').config()

module.exports = defineConfig({
  projectId: 'q7vu1q',
  reporter: 'cypress-mochawesome-reporter',
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
