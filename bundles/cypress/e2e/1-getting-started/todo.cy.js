/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************************!*\
  !*** ./cypress/e2e/1-getting-started/todo.cy.js ***!
  \**************************************************/


/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://example.cypress.io/todo');
  });
  it('displays two todo items by default', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.todo-list li').should('have.length', 2);

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill');
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog');
  });
  it('can add new todo items', () => {
    // We'll store our item text in a variable so we can reuse it
    const newItem = 'Feed the cat';

    // Let's get the input element and use the `type` command to
    // input our new list item. After typing the content of our item,
    // we need to type the enter key as well in order to submit the input.
    // This input has a data-test attribute so we'll use that to select the
    // element in accordance with best practices:
    // https://on.cypress.io/selecting-elements
    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`);

    // Now that we've typed our new item, let's check that it actually was added to the list.
    // Since it's the newest item, it should exist as the last element in the list.
    // In addition, with the two default items, we should have a total of 3 elements in the list.
    // Since assertions yield the element that was asserted on,
    // we can chain both of these assertions together into a single statement.
    cy.get('.todo-list li').should('have.length', 3).last().should('have.text', newItem);
  });
  it('can check off an item as completed', () => {
    // In addition to using the `get` command to get an element by selector,
    // we can also use the `contains` command to get an element by its contents.
    // However, this will yield the <label>, which is lowest-level element that contains the text.
    // In order to check the item, we'll find the <input> element for this <label>
    // by traversing up the dom to the parent element. From there, we can `find`
    // the child checkbox <input> element and use the `check` command to check it.
    cy.contains('Pay electric bill').parent().find('input[type=checkbox]').check();

    // Now that we've checked the button, we can go ahead and make sure
    // that the list element is now marked as completed.
    // Again we'll use `contains` to find the <label> element and then use the `parents` command
    // to traverse multiple levels up the dom until we find the corresponding <li> element.
    // Once we get that element, we can assert that it has the completed class.
    cy.contains('Pay electric bill').parents('li').should('have.class', 'completed');
  });
  context('with a checked task', () => {
    beforeEach(() => {
      // We'll take the command we used above to check off an element
      // Since we want to perform multiple tests that start with checking
      // one element, we put it in the beforeEach hook
      // so that it runs at the start of every test.
      cy.contains('Pay electric bill').parent().find('input[type=checkbox]').check();
    });
    it('can filter for uncompleted tasks', () => {
      // We'll click on the "active" button in order to
      // display only incomplete items
      cy.contains('Active').click();

      // After filtering, we can assert that there is only the one
      // incomplete item in the list.
      cy.get('.todo-list li').should('have.length', 1).first().should('have.text', 'Walk the dog');

      // For good measure, let's also assert that the task we checked off
      // does not exist on the page.
      cy.contains('Pay electric bill').should('not.exist');
    });
    it('can filter for completed tasks', () => {
      // We can perform similar steps as the test above to ensure
      // that only completed tasks are shown
      cy.contains('Completed').click();
      cy.get('.todo-list li').should('have.length', 1).first().should('have.text', 'Pay electric bill');
      cy.contains('Walk the dog').should('not.exist');
    });
    it('can delete all completed tasks', () => {
      // First, let's click the "Clear completed" button
      // `contains` is actually serving two purposes here.
      // First, it's ensuring that the button exists within the dom.
      // This button only appears when at least one task is checked
      // so this command is implicitly verifying that it does exist.
      // Second, it selects the button so we can click it.
      cy.contains('Clear completed').click();

      // Then we can make sure that there is only one element
      // in the list and our element does not exist
      cy.get('.todo-list li').should('have.length', 1).should('not.have.text', 'Pay electric bill');

      // Finally, make sure that the clear button no longer exists.
      cy.contains('Clear completed').should('not.exist');
    });
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVGRixFQUFFLENBQUMsZ0NBQWdDLEVBQUUsTUFBTTtNQUN6QztNQUNBO01BQ0FGLEVBQUUsQ0FBQ1MsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDTSxLQUFLLENBQUMsQ0FBQztNQUVoQ2YsRUFBRSxDQUFDRyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQ3BCQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUN4QkMsS0FBSyxDQUFDLENBQUMsQ0FDUEQsTUFBTSxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQztNQUUzQ0osRUFBRSxDQUFDUyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUNMLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDakQsQ0FBQyxDQUFDO0lBRUZGLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxNQUFNO01BQ3pDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBRixFQUFFLENBQUNTLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDTSxLQUFLLENBQUMsQ0FBQzs7TUFFdEM7TUFDQTtNQUNBZixFQUFFLENBQUNHLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FDcEJDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQ3hCQSxNQUFNLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDOztNQUUvQztNQUNBSixFQUFFLENBQUNTLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDTCxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3BELENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWR1Y3kvLi9jeXByZXNzL2UyZS8xLWdldHRpbmctc3RhcnRlZC90b2RvLmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY3lwcmVzc1wiIC8+XG5cbi8vIFdlbGNvbWUgdG8gQ3lwcmVzcyFcbi8vXG4vLyBUaGlzIHNwZWMgZmlsZSBjb250YWlucyBhIHZhcmlldHkgb2Ygc2FtcGxlIHRlc3RzXG4vLyBmb3IgYSB0b2RvIGxpc3QgYXBwIHRoYXQgYXJlIGRlc2lnbmVkIHRvIGRlbW9uc3RyYXRlXG4vLyB0aGUgcG93ZXIgb2Ygd3JpdGluZyB0ZXN0cyBpbiBDeXByZXNzLlxuLy9cbi8vIFRvIGxlYXJuIG1vcmUgYWJvdXQgaG93IEN5cHJlc3Mgd29ya3MgYW5kXG4vLyB3aGF0IG1ha2VzIGl0IHN1Y2ggYW4gYXdlc29tZSB0ZXN0aW5nIHRvb2wsXG4vLyBwbGVhc2UgcmVhZCBvdXIgZ2V0dGluZyBzdGFydGVkIGd1aWRlOlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2ludHJvZHVjdGlvbi10by1jeXByZXNzXG5cbmRlc2NyaWJlKCdleGFtcGxlIHRvLWRvIGFwcCcsICgpID0+IHtcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgLy8gQ3lwcmVzcyBzdGFydHMgb3V0IHdpdGggYSBibGFuayBzbGF0ZSBmb3IgZWFjaCB0ZXN0XG4gICAgLy8gc28gd2UgbXVzdCB0ZWxsIGl0IHRvIHZpc2l0IG91ciB3ZWJzaXRlIHdpdGggdGhlIGBjeS52aXNpdCgpYCBjb21tYW5kLlxuICAgIC8vIFNpbmNlIHdlIHdhbnQgdG8gdmlzaXQgdGhlIHNhbWUgVVJMIGF0IHRoZSBzdGFydCBvZiBhbGwgb3VyIHRlc3RzLFxuICAgIC8vIHdlIGluY2x1ZGUgaXQgaW4gb3VyIGJlZm9yZUVhY2ggZnVuY3Rpb24gc28gdGhhdCBpdCBydW5zIGJlZm9yZSBlYWNoIHRlc3RcbiAgICBjeS52aXNpdCgnaHR0cHM6Ly9leGFtcGxlLmN5cHJlc3MuaW8vdG9kbycpXG4gIH0pXG5cbiAgaXQoJ2Rpc3BsYXlzIHR3byB0b2RvIGl0ZW1zIGJ5IGRlZmF1bHQnLCAoKSA9PiB7XG4gICAgLy8gV2UgdXNlIHRoZSBgY3kuZ2V0KClgIGNvbW1hbmQgdG8gZ2V0IGFsbCBlbGVtZW50cyB0aGF0IG1hdGNoIHRoZSBzZWxlY3Rvci5cbiAgICAvLyBUaGVuLCB3ZSB1c2UgYHNob3VsZGAgdG8gYXNzZXJ0IHRoYXQgdGhlcmUgYXJlIHR3byBtYXRjaGVkIGl0ZW1zLFxuICAgIC8vIHdoaWNoIGFyZSB0aGUgdHdvIGRlZmF1bHQgaXRlbXMuXG4gICAgY3kuZ2V0KCcudG9kby1saXN0IGxpJykuc2hvdWxkKCdoYXZlLmxlbmd0aCcsIDIpXG5cbiAgICAvLyBXZSBjYW4gZ28gZXZlbiBmdXJ0aGVyIGFuZCBjaGVjayB0aGF0IHRoZSBkZWZhdWx0IHRvZG9zIGVhY2ggY29udGFpblxuICAgIC8vIHRoZSBjb3JyZWN0IHRleHQuIFdlIHVzZSB0aGUgYGZpcnN0YCBhbmQgYGxhc3RgIGZ1bmN0aW9uc1xuICAgIC8vIHRvIGdldCBqdXN0IHRoZSBmaXJzdCBhbmQgbGFzdCBtYXRjaGVkIGVsZW1lbnRzIGluZGl2aWR1YWxseSxcbiAgICAvLyBhbmQgdGhlbiBwZXJmb3JtIGFuIGFzc2VydGlvbiB3aXRoIGBzaG91bGRgLlxuICAgIGN5LmdldCgnLnRvZG8tbGlzdCBsaScpLmZpcnN0KCkuc2hvdWxkKCdoYXZlLnRleHQnLCAnUGF5IGVsZWN0cmljIGJpbGwnKVxuICAgIGN5LmdldCgnLnRvZG8tbGlzdCBsaScpLmxhc3QoKS5zaG91bGQoJ2hhdmUudGV4dCcsICdXYWxrIHRoZSBkb2cnKVxuICB9KVxuXG4gIGl0KCdjYW4gYWRkIG5ldyB0b2RvIGl0ZW1zJywgKCkgPT4ge1xuICAgIC8vIFdlJ2xsIHN0b3JlIG91ciBpdGVtIHRleHQgaW4gYSB2YXJpYWJsZSBzbyB3ZSBjYW4gcmV1c2UgaXRcbiAgICBjb25zdCBuZXdJdGVtID0gJ0ZlZWQgdGhlIGNhdCdcblxuICAgIC8vIExldCdzIGdldCB0aGUgaW5wdXQgZWxlbWVudCBhbmQgdXNlIHRoZSBgdHlwZWAgY29tbWFuZCB0b1xuICAgIC8vIGlucHV0IG91ciBuZXcgbGlzdCBpdGVtLiBBZnRlciB0eXBpbmcgdGhlIGNvbnRlbnQgb2Ygb3VyIGl0ZW0sXG4gICAgLy8gd2UgbmVlZCB0byB0eXBlIHRoZSBlbnRlciBrZXkgYXMgd2VsbCBpbiBvcmRlciB0byBzdWJtaXQgdGhlIGlucHV0LlxuICAgIC8vIFRoaXMgaW5wdXQgaGFzIGEgZGF0YS10ZXN0IGF0dHJpYnV0ZSBzbyB3ZSdsbCB1c2UgdGhhdCB0byBzZWxlY3QgdGhlXG4gICAgLy8gZWxlbWVudCBpbiBhY2NvcmRhbmNlIHdpdGggYmVzdCBwcmFjdGljZXM6XG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3NlbGVjdGluZy1lbGVtZW50c1xuICAgIGN5LmdldCgnW2RhdGEtdGVzdD1uZXctdG9kb10nKS50eXBlKGAke25ld0l0ZW19e2VudGVyfWApXG5cbiAgICAvLyBOb3cgdGhhdCB3ZSd2ZSB0eXBlZCBvdXIgbmV3IGl0ZW0sIGxldCdzIGNoZWNrIHRoYXQgaXQgYWN0dWFsbHkgd2FzIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgIC8vIFNpbmNlIGl0J3MgdGhlIG5ld2VzdCBpdGVtLCBpdCBzaG91bGQgZXhpc3QgYXMgdGhlIGxhc3QgZWxlbWVudCBpbiB0aGUgbGlzdC5cbiAgICAvLyBJbiBhZGRpdGlvbiwgd2l0aCB0aGUgdHdvIGRlZmF1bHQgaXRlbXMsIHdlIHNob3VsZCBoYXZlIGEgdG90YWwgb2YgMyBlbGVtZW50cyBpbiB0aGUgbGlzdC5cbiAgICAvLyBTaW5jZSBhc3NlcnRpb25zIHlpZWxkIHRoZSBlbGVtZW50IHRoYXQgd2FzIGFzc2VydGVkIG9uLFxuICAgIC8vIHdlIGNhbiBjaGFpbiBib3RoIG9mIHRoZXNlIGFzc2VydGlvbnMgdG9nZXRoZXIgaW50byBhIHNpbmdsZSBzdGF0ZW1lbnQuXG4gICAgY3kuZ2V0KCcudG9kby1saXN0IGxpJylcbiAgICAgIC5zaG91bGQoJ2hhdmUubGVuZ3RoJywgMylcbiAgICAgIC5sYXN0KClcbiAgICAgIC5zaG91bGQoJ2hhdmUudGV4dCcsIG5ld0l0ZW0pXG4gIH0pXG5cbiAgaXQoJ2NhbiBjaGVjayBvZmYgYW4gaXRlbSBhcyBjb21wbGV0ZWQnLCAoKSA9PiB7XG4gICAgLy8gSW4gYWRkaXRpb24gdG8gdXNpbmcgdGhlIGBnZXRgIGNvbW1hbmQgdG8gZ2V0IGFuIGVsZW1lbnQgYnkgc2VsZWN0b3IsXG4gICAgLy8gd2UgY2FuIGFsc28gdXNlIHRoZSBgY29udGFpbnNgIGNvbW1hbmQgdG8gZ2V0IGFuIGVsZW1lbnQgYnkgaXRzIGNvbnRlbnRzLlxuICAgIC8vIEhvd2V2ZXIsIHRoaXMgd2lsbCB5aWVsZCB0aGUgPGxhYmVsPiwgd2hpY2ggaXMgbG93ZXN0LWxldmVsIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgdGV4dC5cbiAgICAvLyBJbiBvcmRlciB0byBjaGVjayB0aGUgaXRlbSwgd2UnbGwgZmluZCB0aGUgPGlucHV0PiBlbGVtZW50IGZvciB0aGlzIDxsYWJlbD5cbiAgICAvLyBieSB0cmF2ZXJzaW5nIHVwIHRoZSBkb20gdG8gdGhlIHBhcmVudCBlbGVtZW50LiBGcm9tIHRoZXJlLCB3ZSBjYW4gYGZpbmRgXG4gICAgLy8gdGhlIGNoaWxkIGNoZWNrYm94IDxpbnB1dD4gZWxlbWVudCBhbmQgdXNlIHRoZSBgY2hlY2tgIGNvbW1hbmQgdG8gY2hlY2sgaXQuXG4gICAgY3kuY29udGFpbnMoJ1BheSBlbGVjdHJpYyBiaWxsJylcbiAgICAgIC5wYXJlbnQoKVxuICAgICAgLmZpbmQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJylcbiAgICAgIC5jaGVjaygpXG5cbiAgICAvLyBOb3cgdGhhdCB3ZSd2ZSBjaGVja2VkIHRoZSBidXR0b24sIHdlIGNhbiBnbyBhaGVhZCBhbmQgbWFrZSBzdXJlXG4gICAgLy8gdGhhdCB0aGUgbGlzdCBlbGVtZW50IGlzIG5vdyBtYXJrZWQgYXMgY29tcGxldGVkLlxuICAgIC8vIEFnYWluIHdlJ2xsIHVzZSBgY29udGFpbnNgIHRvIGZpbmQgdGhlIDxsYWJlbD4gZWxlbWVudCBhbmQgdGhlbiB1c2UgdGhlIGBwYXJlbnRzYCBjb21tYW5kXG4gICAgLy8gdG8gdHJhdmVyc2UgbXVsdGlwbGUgbGV2ZWxzIHVwIHRoZSBkb20gdW50aWwgd2UgZmluZCB0aGUgY29ycmVzcG9uZGluZyA8bGk+IGVsZW1lbnQuXG4gICAgLy8gT25jZSB3ZSBnZXQgdGhhdCBlbGVtZW50LCB3ZSBjYW4gYXNzZXJ0IHRoYXQgaXQgaGFzIHRoZSBjb21wbGV0ZWQgY2xhc3MuXG4gICAgY3kuY29udGFpbnMoJ1BheSBlbGVjdHJpYyBiaWxsJylcbiAgICAgIC5wYXJlbnRzKCdsaScpXG4gICAgICAuc2hvdWxkKCdoYXZlLmNsYXNzJywgJ2NvbXBsZXRlZCcpXG4gIH0pXG5cbiAgY29udGV4dCgnd2l0aCBhIGNoZWNrZWQgdGFzaycsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIC8vIFdlJ2xsIHRha2UgdGhlIGNvbW1hbmQgd2UgdXNlZCBhYm92ZSB0byBjaGVjayBvZmYgYW4gZWxlbWVudFxuICAgICAgLy8gU2luY2Ugd2Ugd2FudCB0byBwZXJmb3JtIG11bHRpcGxlIHRlc3RzIHRoYXQgc3RhcnQgd2l0aCBjaGVja2luZ1xuICAgICAgLy8gb25lIGVsZW1lbnQsIHdlIHB1dCBpdCBpbiB0aGUgYmVmb3JlRWFjaCBob29rXG4gICAgICAvLyBzbyB0aGF0IGl0IHJ1bnMgYXQgdGhlIHN0YXJ0IG9mIGV2ZXJ5IHRlc3QuXG4gICAgICBjeS5jb250YWlucygnUGF5IGVsZWN0cmljIGJpbGwnKVxuICAgICAgICAucGFyZW50KClcbiAgICAgICAgLmZpbmQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJylcbiAgICAgICAgLmNoZWNrKClcbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBmaWx0ZXIgZm9yIHVuY29tcGxldGVkIHRhc2tzJywgKCkgPT4ge1xuICAgICAgLy8gV2UnbGwgY2xpY2sgb24gdGhlIFwiYWN0aXZlXCIgYnV0dG9uIGluIG9yZGVyIHRvXG4gICAgICAvLyBkaXNwbGF5IG9ubHkgaW5jb21wbGV0ZSBpdGVtc1xuICAgICAgY3kuY29udGFpbnMoJ0FjdGl2ZScpLmNsaWNrKClcblxuICAgICAgLy8gQWZ0ZXIgZmlsdGVyaW5nLCB3ZSBjYW4gYXNzZXJ0IHRoYXQgdGhlcmUgaXMgb25seSB0aGUgb25lXG4gICAgICAvLyBpbmNvbXBsZXRlIGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICBjeS5nZXQoJy50b2RvLWxpc3QgbGknKVxuICAgICAgICAuc2hvdWxkKCdoYXZlLmxlbmd0aCcsIDEpXG4gICAgICAgIC5maXJzdCgpXG4gICAgICAgIC5zaG91bGQoJ2hhdmUudGV4dCcsICdXYWxrIHRoZSBkb2cnKVxuXG4gICAgICAvLyBGb3IgZ29vZCBtZWFzdXJlLCBsZXQncyBhbHNvIGFzc2VydCB0aGF0IHRoZSB0YXNrIHdlIGNoZWNrZWQgb2ZmXG4gICAgICAvLyBkb2VzIG5vdCBleGlzdCBvbiB0aGUgcGFnZS5cbiAgICAgIGN5LmNvbnRhaW5zKCdQYXkgZWxlY3RyaWMgYmlsbCcpLnNob3VsZCgnbm90LmV4aXN0JylcbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBmaWx0ZXIgZm9yIGNvbXBsZXRlZCB0YXNrcycsICgpID0+IHtcbiAgICAgIC8vIFdlIGNhbiBwZXJmb3JtIHNpbWlsYXIgc3RlcHMgYXMgdGhlIHRlc3QgYWJvdmUgdG8gZW5zdXJlXG4gICAgICAvLyB0aGF0IG9ubHkgY29tcGxldGVkIHRhc2tzIGFyZSBzaG93blxuICAgICAgY3kuY29udGFpbnMoJ0NvbXBsZXRlZCcpLmNsaWNrKClcblxuICAgICAgY3kuZ2V0KCcudG9kby1saXN0IGxpJylcbiAgICAgICAgLnNob3VsZCgnaGF2ZS5sZW5ndGgnLCAxKVxuICAgICAgICAuZmlyc3QoKVxuICAgICAgICAuc2hvdWxkKCdoYXZlLnRleHQnLCAnUGF5IGVsZWN0cmljIGJpbGwnKVxuXG4gICAgICBjeS5jb250YWlucygnV2FsayB0aGUgZG9nJykuc2hvdWxkKCdub3QuZXhpc3QnKVxuICAgIH0pXG5cbiAgICBpdCgnY2FuIGRlbGV0ZSBhbGwgY29tcGxldGVkIHRhc2tzJywgKCkgPT4ge1xuICAgICAgLy8gRmlyc3QsIGxldCdzIGNsaWNrIHRoZSBcIkNsZWFyIGNvbXBsZXRlZFwiIGJ1dHRvblxuICAgICAgLy8gYGNvbnRhaW5zYCBpcyBhY3R1YWxseSBzZXJ2aW5nIHR3byBwdXJwb3NlcyBoZXJlLlxuICAgICAgLy8gRmlyc3QsIGl0J3MgZW5zdXJpbmcgdGhhdCB0aGUgYnV0dG9uIGV4aXN0cyB3aXRoaW4gdGhlIGRvbS5cbiAgICAgIC8vIFRoaXMgYnV0dG9uIG9ubHkgYXBwZWFycyB3aGVuIGF0IGxlYXN0IG9uZSB0YXNrIGlzIGNoZWNrZWRcbiAgICAgIC8vIHNvIHRoaXMgY29tbWFuZCBpcyBpbXBsaWNpdGx5IHZlcmlmeWluZyB0aGF0IGl0IGRvZXMgZXhpc3QuXG4gICAgICAvLyBTZWNvbmQsIGl0IHNlbGVjdHMgdGhlIGJ1dHRvbiBzbyB3ZSBjYW4gY2xpY2sgaXQuXG4gICAgICBjeS5jb250YWlucygnQ2xlYXIgY29tcGxldGVkJykuY2xpY2soKVxuXG4gICAgICAvLyBUaGVuIHdlIGNhbiBtYWtlIHN1cmUgdGhhdCB0aGVyZSBpcyBvbmx5IG9uZSBlbGVtZW50XG4gICAgICAvLyBpbiB0aGUgbGlzdCBhbmQgb3VyIGVsZW1lbnQgZG9lcyBub3QgZXhpc3RcbiAgICAgIGN5LmdldCgnLnRvZG8tbGlzdCBsaScpXG4gICAgICAgIC5zaG91bGQoJ2hhdmUubGVuZ3RoJywgMSlcbiAgICAgICAgLnNob3VsZCgnbm90LmhhdmUudGV4dCcsICdQYXkgZWxlY3RyaWMgYmlsbCcpXG5cbiAgICAgIC8vIEZpbmFsbHksIG1ha2Ugc3VyZSB0aGF0IHRoZSBjbGVhciBidXR0b24gbm8gbG9uZ2VyIGV4aXN0cy5cbiAgICAgIGN5LmNvbnRhaW5zKCdDbGVhciBjb21wbGV0ZWQnKS5zaG91bGQoJ25vdC5leGlzdCcpXG4gICAgfSlcbiAgfSlcbn0pXG4iXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJiZWZvcmVFYWNoIiwiY3kiLCJ2aXNpdCIsIml0IiwiZ2V0Iiwic2hvdWxkIiwiZmlyc3QiLCJsYXN0IiwibmV3SXRlbSIsInR5cGUiLCJjb250YWlucyIsInBhcmVudCIsImZpbmQiLCJjaGVjayIsInBhcmVudHMiLCJjb250ZXh0IiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9