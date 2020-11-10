/// <reference types="cypress" />

// elements
const indexPageTitle = 'Tester Hotel'
const usernameTextfield = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const loginButton = '.btn'

// functions
function checkTitleOfIndexPage(cy){
    cy.title().should('eq',indexPageTitle)
}

function performValidLogin(cy, username, password, contentToConfirm){
    cy.get(usernameTextfield).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)
}
// exports
module.exports = {
    checkTitleOfIndexPage,
    performValidLogin
}