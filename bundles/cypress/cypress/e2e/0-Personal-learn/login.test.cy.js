/// reference types="cypress" />

describe('Login Test', () => {
  beforeEach(() => {
      cy.visit('https://www.saucedemo.com');
      cy.url().should('include', 'login.html')
  });

  it('should fill username', () => {
      cy.get('#user_login').clear()
      cy.get('#user_login').type('username')
  });

  it('should fill password', () => {
      cy.get('input[name="user_password"]').clear()
      cy.get('input[name="user_password"]').type('password')
  });

  it('Should try to login', () => {
      cy.fixture("user").then(user => {
        const username = user.username
        const password = user.password

        cy.get('#user_login').clear()
        cy.get('#user_login').type(username)

        cy.get('input[name="submit"]').click()

        cy.get(' .alert-error').contains('contain.text', 'Login and/or password are wrong.')

      })
  });
});