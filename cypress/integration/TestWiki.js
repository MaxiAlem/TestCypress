describe('tomar datos de wiki', ()=>{

    const filePath = 'cypress/fixtures/testwiki/testwiki.txt'//puede ser un json
    
    beforeEach(()=>{
        cy.visit('https://en.wikipedia.org/wiki/Main_Page');
    });
    it('seek and destroy', ()=>{
        cy.get('#searchInput').type('chipe and dale famicom');//cambiar por iterador de lista en custom command
        cy.get('#searchButton').click();
        cy.get('.infobox-data > :nth-child(2) > ul > li')
            .invoke('text').
            then(text =>{
                const someText = text;
                cy.log(someText);
                cy.writeFile(filePath, ['Super Mario Bros 2'+ someText]);// cambiar nombre por el nombre del custom command
            })
    })
})