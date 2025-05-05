describe('Automation API With Pokeapi', () => {
    it.only('Successfully validate content-type', () => {
      cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
  
      cy.get('@pokemon').then((response) => {
        // Assert header
        expect(response.headers['content-type']).to.include('application/json; charset=utf-8')
  
        // Assert body
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('name', 'ditto')
        expect(response.body).to.have.property('id', 132)
        expect(response.body.abilities).to.be.an('array')
        expect(response.body.types[0].type.name).to.eq('normal') // Optional: tergantung data struktur
      });
      it.only('Succesfully Validate Status Code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@ditto').its('status').should('equal', 200)
    });
    it('Succesfully Validate Status code with params', () => {
        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/users?pages=2&per_pages=1&delay=3',
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });
    
  it.only('Succesfully Validate Content', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
    cy.get('@bulbasaur').its('body').should('include', {name: "bulbasaur"})
  });
  it('Update User', () => {
    var newUser = {
      "name": 'Oim Trust',
      "job": 'Engineering Manager'
    }
    cy.request('PUT', 'https:reqres.in/api/users/2', newUser).then((response) => {
      expect(response.status).equal(200)
      expect(response.body.name).to.eq(newUser.name)
    });
  });
  
    });
  });

// Misalnya ini response dari API
const response = {
  body: {
    abilities: [
      {
        ability: {
          name: "limber",
          url: "https://pokeapi.co/api/v2/ability/7/"
        }
      }
    ]
  }
};

// Validasi menggunakan Cypress/Chai
expect(response.body.abilities[0].ability).to.deep.equal({
  name: "limber",
  url: "https://pokeapi.co/api/v2/ability/7/"
});


