import selector from "../fixtures/selectors";

Cypress.Commands.add("authorization", (email, password) => {
  if (email) {
    cy.get(selector.emailField).type(email);
  }
  if (password) {
    cy.get(selector.passwordField).type(password);
  }
  cy.get(selector.theLogInButton).click();
});

Cypress.Commands.add("choosePlace", () => {
  function rowGeneration() {
    let minRow = 1;
    let maxRow = 10;
    return Math.floor(Math.random() * (maxRow - minRow + 1) + minRow);
  }
  function placeGeneration() {
    let minPlace = 1;
    let maxPlace = 10;
    return Math.floor(Math.random() * (maxPlace - minPlace + 1) + minPlace);
  }
  let row = rowGeneration();
  let place = placeGeneration();
  cy.get(
    `[class='buying-scheme__row']:nth-child(${row}) span:nth-child(${place})`
  ).click();
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
