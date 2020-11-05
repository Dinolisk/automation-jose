/// <reference types="cypress" />

//This is a test suite
describe('Regression test suite', function(){
    
    //Test cases:

    // 1. Checking that the title "Tester Hotel" is there
    it ('Assert title: Tester Hotel', function(){
        cy.visit('http://localhost:3000/login')
        cy.contains('Tester Hotel')
    })


    // 2. Performing a valid login and logout
    it ('Perform a valid login and logout', function(){
        cy.visit('http://localhost:3000/login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get('.user > .btn').click()

    })

    // 3. Overviewing rooms, clients, bills and reservations
    it ('Overview rooms, clients, bills and reservations', function(){
        cy.visit('http://localhost:3000/login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.get(':nth-child(3) > .btn').click()
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.contains('Clients')
        cy.get(':nth-child(3) > .btn').click()
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Bills')
        cy.get(':nth-child(3) > .btn').click()
        cy.get(':nth-child(4) > .btn').click()
        cy.contains('Reservations')
        cy.get(':nth-child(3) > .btn').click()
        cy.get('.user > .btn').click()
    })
        // 4. Creating a client

    it ('Create a client', function(){
        cy.visit('http://localhost:3000/login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.get('h2 > .btn').click()
        cy.get(':nth-child(1) > input').type('Test client')
        cy.get(':nth-child(2) > input').type('test@test.com')
        cy.get(':nth-child(3) > input').type('1234567')
        cy.get('.blue').click()
        cy.contains('Test client') 
        cy.contains('test@test.com') 
        cy.contains('1234567')
        cy.get('.user > .btn').click() 

    })

    // 5. Editing a client
    it('Edit a client', function(){
    cy.visit('http://localhost:3000/login')
    cy.get(':nth-child(1) > input').type('tester01')
    cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
    cy.get('.btn').click()
    cy.get('.blocks > :nth-child(2) > .btn').click()
    cy.get(':nth-child(3) > .action > img').click()
    cy.get('.menu > :nth-child(1)').click()
    cy.get(':nth-child(3) > input').clear().type('New client')
    cy.get(':nth-child(4) > input').clear().type('newemail@test.com')
    cy.get(':nth-child(5) > input').clear().type('7654321')
    cy.get('.blue').click()
    cy.contains('New client') 
    cy.contains('newemail@test.com') 
    cy.contains('7654321') 
    cy.get(':nth-child(3) > .btn').click()

    })

})

