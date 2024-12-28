/// <reference types="cypress" />
const percyHealthCheck = require("@percy/cypress/task");
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on("task", percyHealthCheck);
};
