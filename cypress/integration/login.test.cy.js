/// <reference types="cypress" />

describe('Login/ Logout test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    });

    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.contains('Sign in').click()
    });

    it('Should display error message', () => {
        cy.get('alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    });

    it('Should login to application with valid data', () => {
        
    });

    it('Should logout frok the application', () => {
        
    });
}); 