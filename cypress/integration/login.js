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

      it('Get to login page then input wrong pass', () => {
        login.txtUsername().type("rooxxt")
        login.txtPassword().type("rootxxx")
        login.btnLogin().click()
        cy.request({
            url: login,
            followRedirect: false,
            failOnStatusCode: false,
        }).then((resp) => {
            expect(resp.status).to.eq(200);
            expect(resp.redirectedToUrl).to.eq(undefined);
        });
        });
/*
      it('02 Login with incorrect username',()=> {
        let userName = "rootIncorrect";
        let password = "root123";
        login.txtUsername().type(userName);
        login.txtPassword().type(password);
        login.btnLogin().click();
        expect(resp.status).is(eq,'404');


      })*/

      it('03 Login with incorrect password',()=> {
        let userName = "root";
        let password = "root123Incorrect";
        login.txtUsername().type(userName);
        login.txtPassword().type(password);
        cy.request({
            method : 'POST',
            url: url,
            followRedirect: false,
            failOnStatusCode: false,
        }).then((resp) => {
            expect(resp.status).to.eq(404);
        });


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
    