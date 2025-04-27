import RegistrationPage from '../support/pages/RegistrationPage';

describe('User Registration and Session Handling', () => {
  it('should register a new user and keep session', () => {
    RegistrationPage.visit();
    RegistrationPage.fillRegistrationForm();
    RegistrationPage.verifyAccountCreation();

    // Store session cookies for reuse
    cy.getCookies().then(cookies => {
      Cypress.env('sessionCookies', cookies);
    });
  });
});
