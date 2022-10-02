class Login{
    txtUsername(){
        return cy.xpath("//input[@name='username']")
    }
    txtPassword(){
        return cy.xpath("//input[@name='password']")
    }
    btnLogin(){
        return cy.xpath("//input[@value='Login']")
    }

}
export default Login;