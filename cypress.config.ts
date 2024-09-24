import { defineConfig } from 'cypress';


module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
    baseUrl: 'http://localhost:4000/',
    setupNodeEvents(on, config) {

    }
  }
});
