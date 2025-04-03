/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************************!*\
  !*** ./cypress/e2e/0-Personal-learn/tugas.cy.js ***!
  \**************************************************/


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
    cy.get('.action-email').type('test@example.com').should('have.value', 'test@example.com');
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVnYXMuY3kuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsUUFBUSxDQUFDLGVBQWUsRUFBRSxNQUFNO0VBQzVCQyxFQUFFLENBQUMsMENBQTBDLEVBQUUsTUFBTTtJQUNqRDtJQUNBQyxFQUFFLENBQUNDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQzs7SUFFdEM7SUFDQUQsRUFBRSxDQUFDRSxLQUFLLENBQUMsQ0FBQzs7SUFFVjtJQUNBRixFQUFFLENBQUNHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7O0lBRTNCO0lBQ0FKLEVBQUUsQ0FBQ0ssR0FBRyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQzs7SUFFL0M7SUFDQU4sRUFBRSxDQUFDTyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQ2xCQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FDeEJGLE1BQU0sQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLENBQUM7RUFDakQsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZHVjeS8uL2N5cHJlc3MvZTJlLzAtUGVyc29uYWwtbGVhcm4vdHVnYXMuY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZGVzY3JpYmUoJ015IEZpcnN0IFRlc3QnLCAoKSA9PiB7ICBcclxuICAgIGl0KCdjbGlja2luZyBcInR5cGVcIiBzaG93cyB0aGUgcmlnaHQgaGVhZGluZ3MnLCAoKSA9PiB7ICBcclxuICAgICAgICAvLyBWaXNpdCB0aGUgQ3lwcmVzcyBleGFtcGxlIHBhZ2UgIFxyXG4gICAgICAgIGN5LnZpc2l0KCdodHRwczovL2V4YW1wbGUuY3lwcmVzcy5pbycpOyAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUGF1c2UgdG8gbWFudWFsbHkgaW5zcGVjdCB0aGUgcGFnZSBpZiBuZWVkZWQgKHRoaXMgbWlnaHQgYmUgZm9yIGRlYnVnZ2luZyBwdXJwb3NlcykgIFxyXG4gICAgICAgIGN5LnBhdXNlKCk7ICBcclxuICAgICAgICBcclxuICAgICAgICAvLyBDbGljayBvbiB0aGUgJ3R5cGUnIGxpbmsgIFxyXG4gICAgICAgIGN5LmNvbnRhaW5zKCd0eXBlJykuY2xpY2soKTsgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFZlcmlmeSB0aGF0IHRoZSBVUkwgaW5jbHVkZXMgJy9jb21tYW5kcy9hY3Rpb25zJyAgXHJcbiAgICAgICAgY3kudXJsKCkuc2hvdWxkKCdpbmNsdWRlJywgJy9jb21tYW5kcy9hY3Rpb25zJyk7ICBcclxuICAgICAgICBcclxuICAgICAgICAvLyBHZXQgdGhlIGlucHV0IGZpZWxkIGFuZCB0eXBlIGludG8gaXQsIHRoZW4gdmVyaWZ5IHRoZSB2YWx1ZSBoYXMgYmVlbiB1cGRhdGVkICBcclxuICAgICAgICBjeS5nZXQoJy5hY3Rpb24tZW1haWwnKSAgXHJcbiAgICAgICAgICAgIC50eXBlKCd0ZXN0QGV4YW1wbGUuY29tJykgIFxyXG4gICAgICAgICAgICAuc2hvdWxkKCdoYXZlLnZhbHVlJywgJ3Rlc3RAZXhhbXBsZS5jb20nKTsgIFxyXG4gICAgfSk7ICBcclxufSk7Il0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJjeSIsInZpc2l0IiwicGF1c2UiLCJjb250YWlucyIsImNsaWNrIiwidXJsIiwic2hvdWxkIiwiZ2V0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=