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
        data.lblTimestamp().should('exist');
        data.lblDeskripsi().should('exist');
        data.lblJumlah().should('exist');
        data.txtStart().should('exist');
        data.txtEnd().should('exist');
        data.btnFilter().should('exist');

      })

      it('02 Filter Data Table - Existing Data',()=> {
        data.txtStart().type("2018-07-03");
        data.txtEnd().type("2018-07-06");
        data.btnFilter().click();

        data.lblPemasukan().should('exist');
        data.lblPengeluaran().should('exist');
        data.lblTimestamp().should('exist');
        data.lblDeskripsi().should('exist');
        data.lblJumlah().should('exist');
        data.txtStart().should('exist');
        data.txtEnd().should('exist');
        data.btnFilter().should('exist');

        for (let i = 3; i < 7; i++) {
          cy.contains("2018-07-0"+`${i}`).should('be.visible')
          cy.contains("2018-07-0"+`${i}`).should('be.visible')
          }
      })

      it('03 Filter Data Table - Non-Existing Data',()=> {
        data.txtStart().type("2020-07-03");
        data.txtEnd().type("2020-07-04");
        data.btnFilter().click();
        for (let i = 3; i < 5; i++) {
          cy.contains("2020-07-0"+`${i}`).should('not.exist')
          cy.contains("2020-07-0"+`${i}`).should('not.exist')
          }

      })
      it.only('04 Filter Data Table - Start > End',()=> {
        data.txtStart().type("2018-07-06");
        data.txtEnd().type("2018-07-03");
        data.btnFilter().click();
        cy.url().should('eq', 'https://qa-interview.srcli.xyz/filter')
        
      })
    })
    