/// <reference types="cypress" />

// elements 
const viewRoom = ':nth-child(1) > .btn'
const optionCreateRoom = 'Create Room'
const logoutButton = '.user > .btn'

// actions 
function enterViewRoomsPage(cy){
    cy.get(viewRoom).click()
}   

function checkoptionCreateRoom(cy){
    cy.contains(optionCreateRoom)
}   

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}  

// exports
module.exports = {
    enterViewRoomsPage,
    checkoptionCreateRoom,
    performLogout
}