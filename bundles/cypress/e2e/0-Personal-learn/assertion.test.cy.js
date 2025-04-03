/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***********************************************************!*\
  !*** ./cypress/e2e/0-Personal-learn/assertion.test.cy.js ***!
  \***********************************************************/


describe('My First Test', () => {
  it('clicking "type" shows the right headings', () => {
    cy.visit('https://example.cypress.io');

    // Pause for debugging  
    cy.pause();

    // Clicking the "type" link/button  
    cy.contains('type').click();

    // Check for the correct heading after navigation  
    cy.get('h1', {
      timeout: 10000
    }) // Adjust timeout and selector  
    .should('contain', 'Actions');

    // Look for the email input field  
    cy.get('.action-email', {
      timeout: 10000
    }).should('be.visible').type('test@example.com').should('have.value', 'test@example.com');
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0aW9uLnRlc3QuY3kuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsUUFBUSxDQUFDLGVBQWUsRUFBRSxNQUFNO0VBQzVCQyxFQUFFLENBQUMsMENBQTBDLEVBQUUsTUFBTTtJQUNqREMsRUFBRSxDQUFDQyxLQUFLLENBQUMsNEJBQTRCLENBQUM7O0lBRXRDO0lBQ0FELEVBQUUsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7O0lBRVY7SUFDQUYsRUFBRSxDQUFDRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDOztJQUUzQjtJQUNBSixFQUFFLENBQUNLLEdBQUcsQ0FBQyxJQUFJLEVBQUU7TUFBRUMsT0FBTyxFQUFFO0lBQU0sQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUM1QkMsTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7O0lBRWpDO0lBQ0FQLEVBQUUsQ0FBQ0ssR0FBRyxDQUFDLGVBQWUsRUFBRTtNQUFFQyxPQUFPLEVBQUU7SUFBTSxDQUFDLENBQUMsQ0FDdENDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FDcEJDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUN4QkQsTUFBTSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsQ0FBQztFQUNqRCxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VkdWN5Ly4vY3lwcmVzcy9lMmUvMC1QZXJzb25hbC1sZWFybi9hc3NlcnRpb24udGVzdC5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZXNjcmliZSgnTXkgRmlyc3QgVGVzdCcsICgpID0+IHsgIFxyXG4gICAgaXQoJ2NsaWNraW5nIFwidHlwZVwiIHNob3dzIHRoZSByaWdodCBoZWFkaW5ncycsICgpID0+IHsgIFxyXG4gICAgICAgIGN5LnZpc2l0KCdodHRwczovL2V4YW1wbGUuY3lwcmVzcy5pbycpOyAgXHJcblxyXG4gICAgICAgIC8vIFBhdXNlIGZvciBkZWJ1Z2dpbmcgIFxyXG4gICAgICAgIGN5LnBhdXNlKCk7ICBcclxuXHJcbiAgICAgICAgLy8gQ2xpY2tpbmcgdGhlIFwidHlwZVwiIGxpbmsvYnV0dG9uICBcclxuICAgICAgICBjeS5jb250YWlucygndHlwZScpLmNsaWNrKCk7ICBcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHRoZSBjb3JyZWN0IGhlYWRpbmcgYWZ0ZXIgbmF2aWdhdGlvbiAgXHJcbiAgICAgICAgY3kuZ2V0KCdoMScsIHsgdGltZW91dDogMTAwMDAgfSkgLy8gQWRqdXN0IHRpbWVvdXQgYW5kIHNlbGVjdG9yICBcclxuICAgICAgICAgICAgLnNob3VsZCgnY29udGFpbicsICdBY3Rpb25zJyk7ICBcclxuXHJcbiAgICAgICAgLy8gTG9vayBmb3IgdGhlIGVtYWlsIGlucHV0IGZpZWxkICBcclxuICAgICAgICBjeS5nZXQoJy5hY3Rpb24tZW1haWwnLCB7IHRpbWVvdXQ6IDEwMDAwIH0pICBcclxuICAgICAgICAgICAgLnNob3VsZCgnYmUudmlzaWJsZScpICBcclxuICAgICAgICAgICAgLnR5cGUoJ3Rlc3RAZXhhbXBsZS5jb20nKSAgXHJcbiAgICAgICAgICAgIC5zaG91bGQoJ2hhdmUudmFsdWUnLCAndGVzdEBleGFtcGxlLmNvbScpOyAgXHJcbiAgICB9KTsgIFxyXG59KTsiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImN5IiwidmlzaXQiLCJwYXVzZSIsImNvbnRhaW5zIiwiY2xpY2siLCJnZXQiLCJ0aW1lb3V0Iiwic2hvdWxkIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=