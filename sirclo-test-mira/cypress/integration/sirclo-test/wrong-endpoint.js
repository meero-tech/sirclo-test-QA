
const url404test = "https://qa-interview.srcli.xyz/404"

it("Wrong Endpoint returns 404 'not found' response", () => {

    
    cy.request({
        method : 'GET',
        url: url404test,
        followRedirect: false,
        failOnStatusCode: false,
    }).then((resp) => {
        expect(resp.status).to.eq(404);
    });
   
   
});