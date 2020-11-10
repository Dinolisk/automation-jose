/// <reference types="cypress" />
import * as indexFuncs from '../pages/indexPage'
import * as dashBoardFuncs from '../pages/dashboardPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as clientsFuncs from '../pages/clientsPage'
import * as targets from '../targets/targets'
// Test suite
describe('Regression test suite', function(){
    beforeEach(() => {
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage
    })

    // Test case 1
  
    it('Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.performLogout(cy, 'Login')
    })
    // Test case 2
    it('Perform room overview, look for the Create Room option to make sure you are in the right page then log out',function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel')
        roomsFuncs.enterViewRoomsPage(cy, 'Tester Hotel')
        roomsFuncs.checkoptionCreateRoom(cy, 'Create Room')
        dashBoardFuncs.performLogout(cy, 'Login')
    }) 
    // Test case 3
    it('Perform clients page overview',function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        clientsFuncs.enterViewClientsPage(cy, 'Tester Hotel')
        clientsFuncs.checkoptionCreateClient(cy, 'Create Client')
        dashBoardFuncs.performLogout(cy, 'Login')
    })  
})