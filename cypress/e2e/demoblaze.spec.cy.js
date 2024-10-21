const { generateUser } = require("../support/generateUser");

describe('Demoblaze User flow', () => {
  let user;

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');

    user = generateUser;
});


  it('should register with valid values', () => {
    cy.get('#signin2').click();           
    cy.get('#sign-username').type(user.username);      
    cy.get('#sign-password').type(user.password);      
    cy.get('button[onclick="register()"]').click();
      
  });

  it('should log in with vslid values', () => {

    cy.get('#login2').click(); 
    cy.get('#loginusername').type(user.username);
    cy.get('#loginpassword').type(user.password);
    cy.get('button[onclick="logIn()"]').click(); 
  });

  it('should add Samsung Galaxy s6 to the cart', () => {
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
    cy.get('.col-sm-12 > .btn').click();
    cy.get('#cartur').click();
    cy.get('.success > :nth-child(2)').should('contain', 'galaxy s6');

  });

})