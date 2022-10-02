import Login from '../newpages/web/Login.js'
import Homepage from '../newpages/web/Homepage.js'
import Data from '../newpages/web/Data'
//inisiation insert data in to variable
describe('UI Testing : Data Table', () => {
    let urlLogin = 'http://qa-interview.srcli.xyz/login';
    let urlData = 'http://qa-interview.srcli.xyz/data';
    var login = new Login()
    var data = new Data()
    var homepage = new Homepage()
    beforeEach(() => {
        cy.visit(urlLogin)
        let userName = "root";
        let password = "root123";
        login.txtUsername().type(userName);
        login.txtPassword().type(password);
        login.btnLogin().click();
        homepage.lblTitle().should('be.visible');
        cy.visit(urlData)
      })
    

      it('01 See Data Table',()=> {
        data.lblPemasukan().should('exist');
        data.lblPengeluaran().should('exist');
        
        


      })
    })
    