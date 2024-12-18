describe('My First Test', () => {  
    it('clicking "type" shows the right headings', () => {  
        // Visit the Cypress example page  
        cy.visit('https://example.cypress.io');  
        
        // Pause to manually inspect the page if needed (this might be for debugging purposes)  
        cy.pause();  
        
        // Click on the 'type' link  
        cy.contains('type').click();  
        
        // Verify that the URL includes '/commands/actions'  
        cy.url().should('include', '/commands/actions');  
        
        // Get the input field and type into it, then verify the value has been updated  
        cy.get('.action-email')  
            .type('test@example.com')  
            .should('have.value', 'test@example.com');  
    });  
});