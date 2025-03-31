/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************************************************!*\
  !*** ./cypress/e2e/2-advanced-examples/assertions.cy.js ***!
  \**********************************************************/


/// <reference types="cypress" />

context('Assertions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/assertions');
  });
  describe('Implicit Assertions', () => {
    it('.should() - make an assertion about the current subject', () => {
      // https://on.cypress.io/should
      cy.get('.assertion-table').find('tbody tr:last').should('have.class', 'success').find('td').first()
      // checking the text of the <td> element in various ways
      .should('have.text', 'Column content').should('contain', 'Column content').should('have.html', 'Column content')
      // chai-jquery uses "is()" to check if element matches selector
      .should('match', 'td')
      // to match text content against a regular expression
      // first need to invoke jQuery method text()
      // and then match using regular expression
      .invoke('text').should('match', /column content/i);

      // a better way to check element's text content against a regular expression
      // is to use "cy.contains"
      // https://on.cypress.io/contains
      cy.get('.assertion-table').find('tbody tr:last')
      // finds first <td> element with text content matching regular expression
      .contains('td', /column content/i).should('be.visible');

      // for more information about asserting element's text
      // see https://on.cypress.io/using-cypress-faq#How-do-I-get-an-element’s-text-contents
    });
    it('.and() - chain multiple assertions together', () => {
      // https://on.cypress.io/and
      cy.get('.assertions-link').should('have.class', 'active').and('have.attr', 'href').and('include', 'cypress.io');
    });
  });
  describe('Explicit Assertions', () => {
    // https://on.cypress.io/assertions
    it('expect - make an assertion about a specified subject', () => {
      // We can use Chai's BDD style assertions
      expect(true).to.be.true;
      const o = {
        foo: 'bar'
      };
      expect(o).to.equal(o);
      expect(o).to.deep.equal({
        foo: 'bar'
      });
      // matching text using regular expression
      expect('FooBar').to.match(/bar$/i);
    });
    it('pass your own callback function to should()', () => {
      // Pass a function to should that can have any number
      // of explicit assertions within it.
      // The ".should(cb)" function will be retried
      // automatically until it passes all your explicit assertions or times out.
      cy.get('.assertions-p').find('p').should($p => {
        // https://on.cypress.io/$
        // return an array of texts from all of the p's
        const texts = $p.map((i, el) => Cypress.$(el).text());

        // jquery map returns jquery object
        // and .get() convert this to simple array
        const paragraphs = texts.get();

        // array should have length of 3
        expect(paragraphs, 'has 3 paragraphs').to.have.length(3);

        // use second argument to expect(...) to provide clear
        // message with each assertion
        expect(paragraphs, 'has expected text in each paragraph').to.deep.eq(['Some text from first p', 'More text from second p', 'And even more text from third p']);
      });
    });
    it('finds element by class name regex', () => {
      cy.get('.docs-header').find('div')
      // .should(cb) callback function will be retried
      .should($div => {
        expect($div).to.have.length(1);
        const className = $div[0].className;
        expect(className).to.match(/heading-/);
      })
      // .then(cb) callback is not retried,
      // it either passes or fails
      .then($div => {
        expect($div, 'text content').to.have.text('Introduction');
      });
    });
    it('can throw any error', () => {
      cy.get('.docs-header').find('div').should($div => {
        if ($div.length !== 1) {
          // you can throw your own errors
          throw new Error('Did not find 1 element');
        }
        const className = $div[0].className;
        if (!className.match(/heading-/)) {
          throw new Error(`Could not find class "heading-" in ${className}`);
        }
      });
    });
    it('matches unknown text between two elements', () => {
      /**
       * Text from the first element.
       * @type {string}
      */
      let text;

      /**
       * Normalizes passed text,
       * useful before comparing text with spaces and different capitalization.
       * @param {string} s Text to normalize
      */
      const normalizeText = s => s.replace(/\s/g, '').toLowerCase();
      cy.get('.two-elements').find('.first').then($first => {
        // save text from the first element
        text = normalizeText($first.text());
      });
      cy.get('.two-elements').find('.second').should($div => {
        // we can massage text before comparing
        const secondText = normalizeText($div.text());
        expect(secondText, 'second text').to.equal(text);
      });
    });
    it('assert - assert shape of an object', () => {
      const person = {
        name: 'Joe',
        age: 20
      };
      assert.isObject(person, 'value is object');
    });
    it('retries the should callback until assertions pass', () => {
      cy.get('#random-number').should($div => {
        const n = parseFloat($div.text());
        expect(n).to.be.gte(1).and.be.lte(10);
      });
    });
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssQ0FBQ1UsSUFBSSxDQUFDO01BQ2xELENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUVGeEIsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLE1BQU07TUFDN0MsTUFBTXVDLE1BQU0sR0FBRztRQUNiQyxJQUFJLEVBQUUsS0FBSztRQUNYQyxHQUFHLEVBQUU7TUFDUCxDQUFDO01BRURDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDSixNQUFNLEVBQUUsaUJBQWlCLENBQUM7SUFDNUMsQ0FBQyxDQUFDO0lBRUZ2QyxFQUFFLENBQUMsbURBQW1ELEVBQUUsTUFBTTtNQUM1REgsRUFBRSxDQUFDSSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FDckJFLE1BQU0sQ0FBRTBCLElBQUksSUFBSztRQUNoQixNQUFNZSxDQUFDLEdBQUdDLFVBQVUsQ0FBQ2hCLElBQUksQ0FBQ0wsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVqQ2hCLE1BQU0sQ0FBQ29DLENBQUMsQ0FBQyxDQUFDbkMsRUFBRSxDQUFDQyxFQUFFLENBQUNvQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUN2QyxHQUFHLENBQUNHLEVBQUUsQ0FBQ3FDLEdBQUcsQ0FBQyxFQUFFLENBQUM7TUFDdkMsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZHVjeS8uL2N5cHJlc3MvZTJlLzItYWR2YW5jZWQtZXhhbXBsZXMvYXNzZXJ0aW9ucy5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImN5cHJlc3NcIiAvPlxuXG5jb250ZXh0KCdBc3NlcnRpb25zJywgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBjeS52aXNpdCgnaHR0cHM6Ly9leGFtcGxlLmN5cHJlc3MuaW8vY29tbWFuZHMvYXNzZXJ0aW9ucycpXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ0ltcGxpY2l0IEFzc2VydGlvbnMnLCAoKSA9PiB7XG4gICAgaXQoJy5zaG91bGQoKSAtIG1ha2UgYW4gYXNzZXJ0aW9uIGFib3V0IHRoZSBjdXJyZW50IHN1YmplY3QnLCAoKSA9PiB7XG4gICAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vc2hvdWxkXG4gICAgICBjeS5nZXQoJy5hc3NlcnRpb24tdGFibGUnKVxuICAgICAgICAuZmluZCgndGJvZHkgdHI6bGFzdCcpXG4gICAgICAgIC5zaG91bGQoJ2hhdmUuY2xhc3MnLCAnc3VjY2VzcycpXG4gICAgICAgIC5maW5kKCd0ZCcpXG4gICAgICAgIC5maXJzdCgpXG4gICAgICAgIC8vIGNoZWNraW5nIHRoZSB0ZXh0IG9mIHRoZSA8dGQ+IGVsZW1lbnQgaW4gdmFyaW91cyB3YXlzXG4gICAgICAgIC5zaG91bGQoJ2hhdmUudGV4dCcsICdDb2x1bW4gY29udGVudCcpXG4gICAgICAgIC5zaG91bGQoJ2NvbnRhaW4nLCAnQ29sdW1uIGNvbnRlbnQnKVxuICAgICAgICAuc2hvdWxkKCdoYXZlLmh0bWwnLCAnQ29sdW1uIGNvbnRlbnQnKVxuICAgICAgICAvLyBjaGFpLWpxdWVyeSB1c2VzIFwiaXMoKVwiIHRvIGNoZWNrIGlmIGVsZW1lbnQgbWF0Y2hlcyBzZWxlY3RvclxuICAgICAgICAuc2hvdWxkKCdtYXRjaCcsICd0ZCcpXG4gICAgICAgIC8vIHRvIG1hdGNoIHRleHQgY29udGVudCBhZ2FpbnN0IGEgcmVndWxhciBleHByZXNzaW9uXG4gICAgICAgIC8vIGZpcnN0IG5lZWQgdG8gaW52b2tlIGpRdWVyeSBtZXRob2QgdGV4dCgpXG4gICAgICAgIC8vIGFuZCB0aGVuIG1hdGNoIHVzaW5nIHJlZ3VsYXIgZXhwcmVzc2lvblxuICAgICAgICAuaW52b2tlKCd0ZXh0JylcbiAgICAgICAgLnNob3VsZCgnbWF0Y2gnLCAvY29sdW1uIGNvbnRlbnQvaSlcblxuICAgICAgLy8gYSBiZXR0ZXIgd2F5IHRvIGNoZWNrIGVsZW1lbnQncyB0ZXh0IGNvbnRlbnQgYWdhaW5zdCBhIHJlZ3VsYXIgZXhwcmVzc2lvblxuICAgICAgLy8gaXMgdG8gdXNlIFwiY3kuY29udGFpbnNcIlxuICAgICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2NvbnRhaW5zXG4gICAgICBjeS5nZXQoJy5hc3NlcnRpb24tdGFibGUnKVxuICAgICAgICAuZmluZCgndGJvZHkgdHI6bGFzdCcpXG4gICAgICAgIC8vIGZpbmRzIGZpcnN0IDx0ZD4gZWxlbWVudCB3aXRoIHRleHQgY29udGVudCBtYXRjaGluZyByZWd1bGFyIGV4cHJlc3Npb25cbiAgICAgICAgLmNvbnRhaW5zKCd0ZCcsIC9jb2x1bW4gY29udGVudC9pKVxuICAgICAgICAuc2hvdWxkKCdiZS52aXNpYmxlJylcblxuICAgICAgLy8gZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgYXNzZXJ0aW5nIGVsZW1lbnQncyB0ZXh0XG4gICAgICAvLyBzZWUgaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3VzaW5nLWN5cHJlc3MtZmFxI0hvdy1kby1JLWdldC1hbi1lbGVtZW504oCZcy10ZXh0LWNvbnRlbnRzXG4gICAgfSlcblxuICAgIGl0KCcuYW5kKCkgLSBjaGFpbiBtdWx0aXBsZSBhc3NlcnRpb25zIHRvZ2V0aGVyJywgKCkgPT4ge1xuICAgICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2FuZFxuICAgICAgY3kuZ2V0KCcuYXNzZXJ0aW9ucy1saW5rJylcbiAgICAgICAgLnNob3VsZCgnaGF2ZS5jbGFzcycsICdhY3RpdmUnKVxuICAgICAgICAuYW5kKCdoYXZlLmF0dHInLCAnaHJlZicpXG4gICAgICAgIC5hbmQoJ2luY2x1ZGUnLCAnY3lwcmVzcy5pbycpXG4gICAgfSlcbiAgfSlcblxuICBkZXNjcmliZSgnRXhwbGljaXQgQXNzZXJ0aW9ucycsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vYXNzZXJ0aW9uc1xuICAgIGl0KCdleHBlY3QgLSBtYWtlIGFuIGFzc2VydGlvbiBhYm91dCBhIHNwZWNpZmllZCBzdWJqZWN0JywgKCkgPT4ge1xuICAgICAgLy8gV2UgY2FuIHVzZSBDaGFpJ3MgQkREIHN0eWxlIGFzc2VydGlvbnNcbiAgICAgIGV4cGVjdCh0cnVlKS50by5iZS50cnVlXG4gICAgICBjb25zdCBvID0geyBmb286ICdiYXInIH1cblxuICAgICAgZXhwZWN0KG8pLnRvLmVxdWFsKG8pXG4gICAgICBleHBlY3QobykudG8uZGVlcC5lcXVhbCh7IGZvbzogJ2JhcicgfSlcbiAgICAgIC8vIG1hdGNoaW5nIHRleHQgdXNpbmcgcmVndWxhciBleHByZXNzaW9uXG4gICAgICBleHBlY3QoJ0Zvb0JhcicpLnRvLm1hdGNoKC9iYXIkL2kpXG4gICAgfSlcblxuICAgIGl0KCdwYXNzIHlvdXIgb3duIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHNob3VsZCgpJywgKCkgPT4ge1xuICAgICAgLy8gUGFzcyBhIGZ1bmN0aW9uIHRvIHNob3VsZCB0aGF0IGNhbiBoYXZlIGFueSBudW1iZXJcbiAgICAgIC8vIG9mIGV4cGxpY2l0IGFzc2VydGlvbnMgd2l0aGluIGl0LlxuICAgICAgLy8gVGhlIFwiLnNob3VsZChjYilcIiBmdW5jdGlvbiB3aWxsIGJlIHJldHJpZWRcbiAgICAgIC8vIGF1dG9tYXRpY2FsbHkgdW50aWwgaXQgcGFzc2VzIGFsbCB5b3VyIGV4cGxpY2l0IGFzc2VydGlvbnMgb3IgdGltZXMgb3V0LlxuICAgICAgY3kuZ2V0KCcuYXNzZXJ0aW9ucy1wJylcbiAgICAgICAgLmZpbmQoJ3AnKVxuICAgICAgICAuc2hvdWxkKCgkcCkgPT4ge1xuICAgICAgICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby8kXG4gICAgICAgICAgLy8gcmV0dXJuIGFuIGFycmF5IG9mIHRleHRzIGZyb20gYWxsIG9mIHRoZSBwJ3NcbiAgICAgICAgICBjb25zdCB0ZXh0cyA9ICRwLm1hcCgoaSwgZWwpID0+IEN5cHJlc3MuJChlbCkudGV4dCgpKVxuXG4gICAgICAgICAgLy8ganF1ZXJ5IG1hcCByZXR1cm5zIGpxdWVyeSBvYmplY3RcbiAgICAgICAgICAvLyBhbmQgLmdldCgpIGNvbnZlcnQgdGhpcyB0byBzaW1wbGUgYXJyYXlcbiAgICAgICAgICBjb25zdCBwYXJhZ3JhcGhzID0gdGV4dHMuZ2V0KClcblxuICAgICAgICAgIC8vIGFycmF5IHNob3VsZCBoYXZlIGxlbmd0aCBvZiAzXG4gICAgICAgICAgZXhwZWN0KHBhcmFncmFwaHMsICdoYXMgMyBwYXJhZ3JhcGhzJykudG8uaGF2ZS5sZW5ndGgoMylcblxuICAgICAgICAgIC8vIHVzZSBzZWNvbmQgYXJndW1lbnQgdG8gZXhwZWN0KC4uLikgdG8gcHJvdmlkZSBjbGVhclxuICAgICAgICAgIC8vIG1lc3NhZ2Ugd2l0aCBlYWNoIGFzc2VydGlvblxuICAgICAgICAgIGV4cGVjdChwYXJhZ3JhcGhzLCAnaGFzIGV4cGVjdGVkIHRleHQgaW4gZWFjaCBwYXJhZ3JhcGgnKS50by5kZWVwLmVxKFtcbiAgICAgICAgICAgICdTb21lIHRleHQgZnJvbSBmaXJzdCBwJyxcbiAgICAgICAgICAgICdNb3JlIHRleHQgZnJvbSBzZWNvbmQgcCcsXG4gICAgICAgICAgICAnQW5kIGV2ZW4gbW9yZSB0ZXh0IGZyb20gdGhpcmQgcCcsXG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgaXQoJ2ZpbmRzIGVsZW1lbnQgYnkgY2xhc3MgbmFtZSByZWdleCcsICgpID0+IHtcbiAgICAgIGN5LmdldCgnLmRvY3MtaGVhZGVyJylcbiAgICAgICAgLmZpbmQoJ2RpdicpXG4gICAgICAgIC8vIC5zaG91bGQoY2IpIGNhbGxiYWNrIGZ1bmN0aW9uIHdpbGwgYmUgcmV0cmllZFxuICAgICAgICAuc2hvdWxkKCgkZGl2KSA9PiB7XG4gICAgICAgICAgZXhwZWN0KCRkaXYpLnRvLmhhdmUubGVuZ3RoKDEpXG5cbiAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSAkZGl2WzBdLmNsYXNzTmFtZVxuXG4gICAgICAgICAgZXhwZWN0KGNsYXNzTmFtZSkudG8ubWF0Y2goL2hlYWRpbmctLylcbiAgICAgICAgfSlcbiAgICAgICAgLy8gLnRoZW4oY2IpIGNhbGxiYWNrIGlzIG5vdCByZXRyaWVkLFxuICAgICAgICAvLyBpdCBlaXRoZXIgcGFzc2VzIG9yIGZhaWxzXG4gICAgICAgIC50aGVuKCgkZGl2KSA9PiB7XG4gICAgICAgICAgZXhwZWN0KCRkaXYsICd0ZXh0IGNvbnRlbnQnKS50by5oYXZlLnRleHQoJ0ludHJvZHVjdGlvbicpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGl0KCdjYW4gdGhyb3cgYW55IGVycm9yJywgKCkgPT4ge1xuICAgICAgY3kuZ2V0KCcuZG9jcy1oZWFkZXInKVxuICAgICAgICAuZmluZCgnZGl2JylcbiAgICAgICAgLnNob3VsZCgoJGRpdikgPT4ge1xuICAgICAgICAgIGlmICgkZGl2Lmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgLy8geW91IGNhbiB0aHJvdyB5b3VyIG93biBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGlkIG5vdCBmaW5kIDEgZWxlbWVudCcpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gJGRpdlswXS5jbGFzc05hbWVcblxuICAgICAgICAgIGlmICghY2xhc3NOYW1lLm1hdGNoKC9oZWFkaW5nLS8pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGNsYXNzIFwiaGVhZGluZy1cIiBpbiAke2NsYXNzTmFtZX1gKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgaXQoJ21hdGNoZXMgdW5rbm93biB0ZXh0IGJldHdlZW4gdHdvIGVsZW1lbnRzJywgKCkgPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiBUZXh0IGZyb20gdGhlIGZpcnN0IGVsZW1lbnQuXG4gICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgKi9cbiAgICAgIGxldCB0ZXh0XG5cbiAgICAgIC8qKlxuICAgICAgICogTm9ybWFsaXplcyBwYXNzZWQgdGV4dCxcbiAgICAgICAqIHVzZWZ1bCBiZWZvcmUgY29tcGFyaW5nIHRleHQgd2l0aCBzcGFjZXMgYW5kIGRpZmZlcmVudCBjYXBpdGFsaXphdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzIFRleHQgdG8gbm9ybWFsaXplXG4gICAgICAqL1xuICAgICAgY29uc3Qgbm9ybWFsaXplVGV4dCA9IChzKSA9PiBzLnJlcGxhY2UoL1xccy9nLCAnJykudG9Mb3dlckNhc2UoKVxuXG4gICAgICBjeS5nZXQoJy50d28tZWxlbWVudHMnKVxuICAgICAgICAuZmluZCgnLmZpcnN0JylcbiAgICAgICAgLnRoZW4oKCRmaXJzdCkgPT4ge1xuICAgICAgICAgIC8vIHNhdmUgdGV4dCBmcm9tIHRoZSBmaXJzdCBlbGVtZW50XG4gICAgICAgICAgdGV4dCA9IG5vcm1hbGl6ZVRleHQoJGZpcnN0LnRleHQoKSlcbiAgICAgICAgfSlcblxuICAgICAgY3kuZ2V0KCcudHdvLWVsZW1lbnRzJylcbiAgICAgICAgLmZpbmQoJy5zZWNvbmQnKVxuICAgICAgICAuc2hvdWxkKCgkZGl2KSA9PiB7XG4gICAgICAgICAgLy8gd2UgY2FuIG1hc3NhZ2UgdGV4dCBiZWZvcmUgY29tcGFyaW5nXG4gICAgICAgICAgY29uc3Qgc2Vjb25kVGV4dCA9IG5vcm1hbGl6ZVRleHQoJGRpdi50ZXh0KCkpXG5cbiAgICAgICAgICBleHBlY3Qoc2Vjb25kVGV4dCwgJ3NlY29uZCB0ZXh0JykudG8uZXF1YWwodGV4dClcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgaXQoJ2Fzc2VydCAtIGFzc2VydCBzaGFwZSBvZiBhbiBvYmplY3QnLCAoKSA9PiB7XG4gICAgICBjb25zdCBwZXJzb24gPSB7XG4gICAgICAgIG5hbWU6ICdKb2UnLFxuICAgICAgICBhZ2U6IDIwLFxuICAgICAgfVxuXG4gICAgICBhc3NlcnQuaXNPYmplY3QocGVyc29uLCAndmFsdWUgaXMgb2JqZWN0JylcbiAgICB9KVxuXG4gICAgaXQoJ3JldHJpZXMgdGhlIHNob3VsZCBjYWxsYmFjayB1bnRpbCBhc3NlcnRpb25zIHBhc3MnLCAoKSA9PiB7XG4gICAgICBjeS5nZXQoJyNyYW5kb20tbnVtYmVyJylcbiAgICAgICAgLnNob3VsZCgoJGRpdikgPT4ge1xuICAgICAgICAgIGNvbnN0IG4gPSBwYXJzZUZsb2F0KCRkaXYudGV4dCgpKVxuXG4gICAgICAgICAgZXhwZWN0KG4pLnRvLmJlLmd0ZSgxKS5hbmQuYmUubHRlKDEwKVxuICAgICAgICB9KVxuICAgIH0pXG4gIH0pXG59KVxuIl0sIm5hbWVzIjpbImNvbnRleHQiLCJiZWZvcmVFYWNoIiwiY3kiLCJ2aXNpdCIsImRlc2NyaWJlIiwiaXQiLCJnZXQiLCJmaW5kIiwic2hvdWxkIiwiZmlyc3QiLCJpbnZva2UiLCJjb250YWlucyIsImFuZCIsImV4cGVjdCIsInRvIiwiYmUiLCJ0cnVlIiwibyIsImZvbyIsImVxdWFsIiwiZGVlcCIsIm1hdGNoIiwiJHAiLCJ0ZXh0cyIsIm1hcCIsImkiLCJlbCIsIkN5cHJlc3MiLCIkIiwidGV4dCIsInBhcmFncmFwaHMiLCJoYXZlIiwibGVuZ3RoIiwiZXEiLCIkZGl2IiwiY2xhc3NOYW1lIiwidGhlbiIsIkVycm9yIiwibm9ybWFsaXplVGV4dCIsInMiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCIkZmlyc3QiLCJzZWNvbmRUZXh0IiwicGVyc29uIiwibmFtZSIsImFnZSIsImFzc2VydCIsImlzT2JqZWN0IiwibiIsInBhcnNlRmxvYXQiLCJndGUiLCJsdGUiXSwic291cmNlUm9vdCI6IiJ9