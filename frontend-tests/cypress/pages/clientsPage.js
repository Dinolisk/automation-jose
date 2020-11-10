/// <reference types="cypress" />

// elements 
const viewClients = '.blocks > :nth-child(2) > .btn'
const optionCreateClient = 'Create Client'
const logoutButton = '.user > .btn'

// actions 
function enterViewClientsPage(cy){
    cy.get(viewClients).click()
}   

function checkoptionCreateClient(cy){
    cy.contains(optionCreateClient)
}   

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}  

// exports
module.exports = {
    enterViewClientsPage,
    checkoptionCreateClient,
    performLogout
}