const elements = require("../../fixtures/Pages/common-elements").elements;
const data = require("../../fixtures/messages/data").elements;
describe("Login Page UI test", () => {
  beforeEach(() => {
    cy.visitLoginPage();
  });
  it("Successful login", () => {
    cy.get(elements.username).type(Cypress.env("user"), { log: false });
    cy.get(elements.password).type(Cypress.env("password"), { log: false });
    cy.get(elements.login).click();
    cy.url().should("include", "/predict");
  });
  it("Try logging into the application by providing only the username.", () => {
    cy.get(elements.username).type(Cypress.env("user"), { log: false });
    cy.get(elements.login).click();
    cy.url().should("not.include", "/predict");
  });
  it("Try logging into the application by providing only the password.", () => {
    cy.get(elements.password).type(Cypress.env("password"), { log: false });
    cy.get(elements.login).click();
    cy.url().should("not.include", "/predict");
  });
  it("Try logging into the application by providing  invalid username.", () => {
    cy.get(elements.username).type("joaotest", { log: false });
    cy.get(elements.password).type(Cypress.env("password"), { log: false });
    cy.get(elements.login).click();
    cy.contains(data.negativeMsgLogin);
    cy.url().should("not.include", "/predict");
  });
  it("Try logging into the application by providing  invalid password.", () => {
    cy.get(elements.username).type(Cypress.env("user"), { log: false });
    cy.get(elements.password).type("sdassd", { log: false });
    cy.get(elements.login).click();
    cy.contains(data.negativeMsgLogin);
    cy.url().should("not.include", "/predict");
  });
});
