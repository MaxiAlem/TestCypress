describe('Login', () =>{
    beforeEach(()=>{
        cy.visit('/');
    })
    it('Login with incorrect mail',()=>{
        cy.fixture('login').then((login)=>{
            cy.login('wrongmail','123456789')
            cy.get(login.invalidBanner).should('contain', 'Invalid email address.');
        })

    })
})