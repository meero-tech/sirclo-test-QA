import Login from '../../newpages/web/Login.js'
import Homepage from '../../newpages/web/Homepage.js'
//inisiation insert data in to variable
describe('UI Testing : Login', () => {
    let url = 'http://qa-interview.srcli.xyz/login';
    var login = new Login()
    var homepage = new Homepage()
    beforeEach(() => {
        cy.visit(url)
      })
    

      it('03 Login with correct username and password',()=> {
        let userName = "root";
        let password = "root123";
        login.txtUsername().type(userName);
        login.txtPassword().type(password);
        login.btnLogin().click();
        homepage.lblTitle().should('be.visible');
        cy.url().should('eq', 'https://qa-interview.srcli.xyz/')
        


      })
    })
    