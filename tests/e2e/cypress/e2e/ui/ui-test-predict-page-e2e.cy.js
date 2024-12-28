const elements = require("../../fixtures/Pages/common-elements").elements;
describe("Login Page UI test", () => {
  beforeEach(() => {
    cy.sucessfulLogin();
  });
  it("Should display the predict page with all required fields and buttons", () => {
    cy.contains("label", "Bug Severity");
    cy.get(elements.predict_bug_severit).should("be.visible");
    cy.contains("label", "Frequency of Changes (per month)");
    cy.get(elements.predict_frequency_of_changes).should("be.visible");
    cy.contains("label", "Execution Time (minutes)");
    cy.get(elements.predict_execution_time).should("be.visible");
    cy.contains("label", "Test Complexity");
    cy.get(elements.predict_test_complexity).should("be.visible");
    cy.contains("label", "Test Environment");
    cy.get(elements.predict_test_environment).should("be.visible");
    cy.contains("button", "Predict Priority").should("be.visible");
    cy.contains("button", "Clear Form").should("be.visible");
    cy.contains("a", "Logoff").should("be.visible");
  });
});
