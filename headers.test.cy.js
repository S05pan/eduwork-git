describe('Validate Header and Body', () => {
    it.only('Validate Header and Response Body', () => {
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
      })
    })
  })
  