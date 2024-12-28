const elements = require("../../fixtures/Pages/common-elements").elements;
const data = require("../../fixtures/messages/data").elements;
describe("Predict page", () => {
  beforeEach(() => {
    cy.sucessfulLogin();
  });
  it("Should make a prediction with valid inputs", () => {
    cy.get(elements.predict_bug_severit).select("High");
    cy.get(elements.predict_frequency_of_changes).type("10");
    cy.get(elements.predict_execution_time).type("15");
    cy.get(elements.predict_test_complexity).select("Medium");
    cy.get(elements.predict_test_environment).select("Staging");
    cy.contains("Predict Priority").click();
    cy.contains(data.negativeMsgPredict);
  });
  it("Should clear the form when Clear Form button is clicked", () => {
    cy.get(elements.predict_bug_severit).select("High");
    cy.get(elements.predict_frequency_of_changes).type("10");
    cy.get(elements.predict_execution_time).type("15");
    cy.get(elements.predict_test_complexity).select("Medium");
    cy.get(elements.predict_test_environment).select("Staging");
    cy.contains("Predict Priority").click();
    cy.get(elements.predict_bug_severit).should("have.value", "High");
    cy.get(elements.predict_frequency_of_changes).should("have.value", "");
    cy.get(elements.predict_execution_time).should("have.value", "");
    cy.get(elements.predict_test_complexity).should("have.value", "High");
    cy.get(elements.predict_test_environment).should("have.value", "Dev");
  });

  it("Should log off and redirect to the login page", () => {
    cy.contains("Logoff").click();
    cy.contains("h2", "Login");
  });
  it("Validate that the prediction result is not displayed when the frequency of changes is less than 0", () => {
    cy.get(elements.predict_bug_severit).select("High");
    cy.get(elements.predict_frequency_of_changes).type("-5");
    cy.get(elements.predict_execution_time).type("15");
    cy.get(elements.predict_test_complexity).select("Medium");
    cy.get(elements.predict_test_environment).select("Staging");
    cy.contains("Predict Priority").click();
    cy.get(".alert").should("not.exist");
  });
  it("Validate that the prediction result is not displayed when the Execution Time is less than 0", () => {
    cy.get(elements.predict_bug_severit).select("High");
    cy.get(elements.predict_frequency_of_changes).type("10");
    cy.get(elements.predict_execution_time).type("-10");
    cy.get(elements.predict_test_complexity).select("Medium");
    cy.get(elements.predict_test_environment).select("Staging");
    cy.contains("Predict Priority").click();
    cy.get(".alert").should("not.exist");
  });

  it("Validate that the prediction result is not displayed when 'Frequency of Changes' is not a number", () => {
    cy.get(elements.predict_bug_severit).select("High");
    cy.get(elements.predict_frequency_of_changes).type("abc");
    cy.get(elements.predict_execution_time).type("15");
    cy.get(elements.predict_test_complexity).select("Medium");
    cy.get(elements.predict_test_environment).select("Staging");
    cy.contains("Predict Priority").click();
    cy.get(".alert").should("not.exist");
  });

  it("Validate that the prediction result is not displayed when 'Execution Time' is not a number", () => {
    cy.get(elements.predict_bug_severit).select("High");
    cy.get(elements.predict_frequency_of_changes).type("10");
    cy.get(elements.predict_execution_time).type("abc");
    cy.get(elements.predict_test_complexity).select("Medium");
    cy.get(elements.predict_test_environment).select("Staging");
    cy.contains("Predict Priority").click();
    cy.get(".alert").should("not.exist");
  });
  it("Validate that the prediction result is not displayed when all required fields are empty", () => {
    cy.contains("Predict Priority").click();
    cy.get(".alert").should("not.exist");
  });
});
