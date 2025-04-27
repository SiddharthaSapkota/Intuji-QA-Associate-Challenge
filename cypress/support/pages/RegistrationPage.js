const { faker } = require('@faker-js/faker');

class RegistrationPage {
  visit() {
    cy.visit('https://automationexercise.com');
    cy.contains('Signup / Login').click();
  }

  fillRegistrationForm() {
    const name = faker.name.firstName();
    const email = faker.internet.email();

    // Save these to use later (like login)
    Cypress.env('userName', name);
    Cypress.env('userEmail', email);

    cy.get('input[data-qa="signup-name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();

    // Fill additional details (selectors might change, adjust as needed)
    cy.get('#id_gender1').check();
    cy.get('#password').type(faker.internet.password());
    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1995');
    cy.get('#first_name').type(name);
    cy.get('#last_name').type(faker.name.lastName());
    cy.get('#address1').type(faker.address.streetAddress());
    cy.get('#state').type(faker.address.state());
    cy.get('#city').type(faker.address.city());
    cy.get('#zipcode').type(faker.address.zipCode());
    cy.get('#mobile_number').type(faker.phone.number('98########'));
    cy.get('button[data-qa="create-account"]').click();
  }

  verifyAccountCreation() {
    cy.contains('Account Created!').should('be.visible');
    cy.get('a[data-qa="continue-button"]').click();
    cy.contains(`Logged in as ${Cypress.env('userName')}`).should('be.visible');
  }
}

export default new RegistrationPage();
