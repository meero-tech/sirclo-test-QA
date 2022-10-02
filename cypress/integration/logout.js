const logout = "https://qa-interview.srcli.xyz/logout"
const login = "https://qa-interview.srcli.xyz/login"

it("Logout after login", () =>  {

    cy.visit(login)
    cy.get('[type="text"]').type("root")
    cy.get('[type="password"]').type("root123")
    cy.get('[type="submit"]').click()
    cy.clearCookies()

              cy.request({

                  url: logout,
                  followRedirect: false,
                  failOnStatusCode: false
                  ,
              }).then((resp) => {
                  expect(resp.status).to.eq(200);
                  cy.clearCookies()

                  cy.contains("Welcome!").should("exist");
                  cy.wait(3000)
            cy.visit(login)

    });

});
