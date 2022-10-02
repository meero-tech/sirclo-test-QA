import Login from '../newpages/web/Login.js'
import Homepage from '../newpages/web/Homepage.js'
//inisiation insert data in to variable
describe('UI Testing : Login', () => {
    let url = 'http://qa-interview.srcli.xyz/login';
    beforeEach(() => {
        cy.visit(url)
      })
   

    var login = new Login()
    var homepage = new Homepage()

    it('01 Before Login : See the login page', () => {
          login.txtUsername().should('be.visible');
          login.txtPassword().should('be.visible');
          login.btnLogin().should('be.visible');
      }) 

      it('02 Login with incorrect username & password',()=> {
        let userName = "rootIncorrect";
        let password = "root123Incorrect";
        login.txtUsername().type(userName);
        login.txtPassword().type(password);
        login.btnLogin().click();
        cy.contains("The password or username is wrong").should('exist');


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
    