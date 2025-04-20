describe ('Create New User', () => {
    it('Successfully create new user', () => {
        var user = {
            "name": "Fathur Rohim",
            "job": "Test Engineer"
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
        expect(response.status).equal(201)
        });
});

});