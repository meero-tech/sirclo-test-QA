import Homepage from '../newpages/web/Homepage.js'
//inisiation insert data in to variable
describe('Test Homepage', () => {
    beforeEach(() => {
        cy.visit('http://qa-interview.srcli.xyz/')
      })
   

    var homepage = new Homepage()

    it('See the homepage', () => {
          homepage.lblTitle().should('be.visible');
      }) 
    
    })
    