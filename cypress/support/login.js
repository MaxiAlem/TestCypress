Cypress.Commands.add('login', (email, password)=>{//function con dos argumentos
    cy.fixture('login').then((login)=>{
        cy.get(login.loginLink).click();
        cy.get(login.email).type(email);
        cy.get(login.password).type(password);
        cy.get(login.loginButton).click();
        })
    })