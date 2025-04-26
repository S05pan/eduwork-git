// Menambahkan command loginViaAPI ke dalam Cypress  
Cypress.Commands.add('loginViaAPI', (  
    email = Cypress.env('userEmail'),  
    password = Cypress.env('userPassword')  
  ) => {  
    cy.request('POST', `${Cypress.env('apiUrl')}/users/login`, {  
      username: email,  
      password: password,  
    }).then((response) => {  
      // Memastikan permintaan berhasil sebelum melanjutkan  
      expect(response.status).to.eq(200);  
      cy.setCookie('sessionId', response.body.sessionId);  
      cy.setCookie('userName', response.body.userName);  
      cy.visit('/#!/main');  
    });  
  });  
  
  // Penerapan command dalam tes Cypress  
  describe('Login Test', () => {  
    it('should log in with valid credentials', () => {  
      // Menggunakan command loginViaAPI  
      cy.loginViaAPI().then(() => {  
        // Verifikasi elemen setelah login  
        cy.get('.welcome-message').should('contain', 'Welcome');  
        // Tambahkan lebih banyak pengujian sesuai kebutuhan  
      });  
    });  
  });  