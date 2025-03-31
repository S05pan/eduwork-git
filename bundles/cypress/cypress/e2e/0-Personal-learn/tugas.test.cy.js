/// reference types="cypress" />

describe('Login Test', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.url().should('include', 'login.html')
    });
  
    it('should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });
  
    it('should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
        cy.get('#user_remember_me').check();
    });
  
    it.only('Should try to login', () => {
        cy.fixture("user").then(user => {
          const username = user.username
          const password = user.password
  
          cy.login(username.password)
          cy.get(' .alert-error').contains('Login and/or password are wrong.')
  
    it('Should make payments to your saved payees', () => {
        
    });
        })
    });
  });