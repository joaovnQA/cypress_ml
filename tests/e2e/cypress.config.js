const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  requestTimeout: 9000,
  responseTimeout: 30000,
  projectId: "u4qxtw",
  viewportWidth: 1600,
  viewportHeight: 900,
  env: {
    baseUrl: "http://127.0.0.1:5000",
  },
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
