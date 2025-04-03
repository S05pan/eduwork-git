/// reference types="cypress" />

describe ('Browser actions', () => {
    it('Should load books website', () => {
        cy.visit('https://books.toscrape.com/index.html', {})
        cy.url().should('include', 'index.html')
    });

    it('Should click on Travel Category', () => {
        cy.get('a').contains('Travel').click
    });
} );