describe('Search elements', ()=>{//arrow function
    beforeEach(()=>{//antes de cada prueba
        cy.visit('/');//sitio cargado en cypress.js como baseUrl
    })
    it('search for elements with multiple results', ()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResults').then((searchResults)=>{//el nombre del fixture y el del then no necesariamente son iguales
            cy.get(searchResults.title).should('contain', 'dress');
        })
    })
    it('Search for elements with no results', ()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('qwerty');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResults').then((searchResults)=>{//el nombre del fixture y el del then no necesariamente son iguales
            cy.get(searchResults.alert).should('contain', 'No results were found for your search');
        })
    })
})