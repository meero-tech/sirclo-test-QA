let username = "root";
let password = "root123";

cy.session(username, () => {
    cy.request({
      method: 'POST',
      url: 'https://qa-interview.srcli.xyz/login',
      body: { username, password },
    }).then(({ body }) => {
      window.localStorage.setItem('authToken', body.token)
    })
  })