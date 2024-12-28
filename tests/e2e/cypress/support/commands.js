const elements = require("../fixtures/Pages/common-elements").elements;

Cypress.Commands.add("visitLoginPage", () => {
  cy.visit(Cypress.env("baseUrl"));
});
Cypress.Commands.add("sucessfulLogin", () => {
  cy.visit(Cypress.env("baseUrl"));
  cy.get(elements.username).type(Cypress.env("user"), { log: false });
  cy.get(elements.password).type(Cypress.env("password"), { log: false });
  cy.get(elements.login).click();
  cy.url().should("include", "/predict");
});
