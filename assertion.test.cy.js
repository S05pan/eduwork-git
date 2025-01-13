describe('My First Test', () => {  
    it('clicking "type" shows the right headings', () => {  
        cy.visit('https://example.cypress.io');  

        // Pause for debugging  
        cy.pause();  

        // Clicking the "type" link/button  
        cy.contains('type').click();  

        // Check for the correct heading after navigation  
        cy.get('h1', { timeout: 10000 }) // Adjust timeout and selector  
            .should('contain', 'Actions');  

        // Look for the email input field  
        cy.get('.action-email', { timeout: 10000 })  
            .should('be.visible')  
            .type('test@example.com')  
            .should('have.value', 'test@example.com');  
    });  
});