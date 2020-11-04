/// <reference types="cypress" />

//This is a test suite
describe('Regression test suite', function(){
    
    //This is a test case
    it ('Perform a valid login', function(){
        cy.visit('http://localhost:3000/login')

    })

})