/// <reference types="cypress" />

describe('SearchBox Test', () => {
        before(() => {
            cy.visit('http://zero.webappsecurity.com/index.html')
        });
        it('Should type into searchbox and submit', () => {
            // TODO
            cy.get('#searchTerm').type('some text {enter}')
        });
        it('Should show search result page', () => {
            // TODO
            //cy.get('h2').should('contain.text', 'Search Results:')
            cy.get('h2').should('exist').and('contain.text', 'Search Results:');
        });
        it('Should access Online Banking', () => {
           cy.get ('#onlineBankingMenu').click()
        });
        it('Should access Feedback', () => {
            cy.get('#feedback').click()
        });
    });