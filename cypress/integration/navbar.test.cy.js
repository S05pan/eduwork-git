/// <reference types="cypress" />
describe('Navbar test', function() {
    before(() => {
        // todo
        cy.visit('http://zero.webappsecurity.com/index.html')
    });
    it('Should display online banking content', () => {
        // TO DO
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    });

    it('Should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url.should('include', 'index.html')
    });
});