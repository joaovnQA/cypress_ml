const elements = require("../../fixtures/Pages/common-elements").elements;
describe("Login Page UI test", () => {
  beforeEach(() => {
    cy.visitLoginPage();
  });
  it("Validate that the user can successfully access the login page.", () => {
    cy.contains("h2", "Login");
  });
  it("Validate that the login page contains fields for logging in.", () => {
    cy.contains("label", "Username");
    cy.get(elements.username).should("be.visible");
    cy.contains("label", "Password");
    cy.get(elements.password).should("be.visible");
    cy.get(elements.login).should("be.visible");
  });
});
