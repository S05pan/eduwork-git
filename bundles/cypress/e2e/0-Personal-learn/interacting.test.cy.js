/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*************************************************************!*\
  !*** ./cypress/e2e/0-Personal-learn/interacting.test.cy.js ***!
  \*************************************************************/


/// <reference types="cypress" />

describe('Browser actions', () => {
  it('Should load books website', () => {
    cy.visit('https://books.toscrape.com/index.html', {
      timeout: 10000
    });
    cy.url().should('include', 'index.html');
    cy.get('h1').should('have.text', 'All products'); // Memastikan halaman termuat dengan benar
  });
  it('Should click on Travel Category', () => {
    cy.contains('a', 'Travel').should('be.visible').click();
    cy.get('h1').should('have.text', 'Travel');
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3RpbmcudGVzdC5jeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBQSxRQUFRLENBQUMsaUJBQWlCLEVBQUUsTUFBTTtFQUM5QkMsRUFBRSxDQUFDLDJCQUEyQixFQUFFLE1BQU07SUFDbENDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDLHVDQUF1QyxFQUFFO01BQUVDLE9BQU8sRUFBRTtJQUFNLENBQUMsQ0FBQztJQUNyRUYsRUFBRSxDQUFDRyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQztJQUN4Q0osRUFBRSxDQUFDSyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUNELE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztFQUN0RCxDQUFDLENBQUM7RUFFRkwsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLE1BQU07SUFDeENDLEVBQUUsQ0FBQ00sUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQ0YsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDRyxLQUFLLENBQUMsQ0FBQztJQUN2RFAsRUFBRSxDQUFDSyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUNELE1BQU0sQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDO0VBQzlDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWR1Y3kvLi9jeXByZXNzL2UyZS8wLVBlcnNvbmFsLWxlYXJuL2ludGVyYWN0aW5nLnRlc3QuY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cclxuXHJcbmRlc2NyaWJlKCdCcm93c2VyIGFjdGlvbnMnLCAoKSA9PiB7XHJcbiAgICBpdCgnU2hvdWxkIGxvYWQgYm9va3Mgd2Vic2l0ZScsICgpID0+IHtcclxuICAgICAgICBjeS52aXNpdCgnaHR0cHM6Ly9ib29rcy50b3NjcmFwZS5jb20vaW5kZXguaHRtbCcsIHsgdGltZW91dDogMTAwMDAgfSk7XHJcbiAgICAgICAgY3kudXJsKCkuc2hvdWxkKCdpbmNsdWRlJywgJ2luZGV4Lmh0bWwnKTtcclxuICAgICAgICBjeS5nZXQoJ2gxJykuc2hvdWxkKCdoYXZlLnRleHQnLCAnQWxsIHByb2R1Y3RzJyk7IC8vIE1lbWFzdGlrYW4gaGFsYW1hbiB0ZXJtdWF0IGRlbmdhbiBiZW5hclxyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoJ1Nob3VsZCBjbGljayBvbiBUcmF2ZWwgQ2F0ZWdvcnknLCAoKSA9PiB7ICBcclxuICAgICAgICBjeS5jb250YWlucygnYScsICdUcmF2ZWwnKS5zaG91bGQoJ2JlLnZpc2libGUnKS5jbGljaygpOyAgXHJcbiAgICAgICAgY3kuZ2V0KCdoMScpLnNob3VsZCgnaGF2ZS50ZXh0JywgJ1RyYXZlbCcpOyAgXHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiY3kiLCJ2aXNpdCIsInRpbWVvdXQiLCJ1cmwiLCJzaG91bGQiLCJnZXQiLCJjb250YWlucyIsImNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==