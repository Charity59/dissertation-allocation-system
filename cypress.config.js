const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  experimentalStudio: true,
  defaultCommandTimeout: 60000,
  viewportWidth: 1500,
  viewportHeight: 1000,
  e2e: {
    chromeWebSecurity: false,
    baseUrl:'https://dissertation-interface-web-app.vercel.app/auth/sign-in',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "include": ["./node_modules/cypress", "cypress/**/*.js"]
  },
});
