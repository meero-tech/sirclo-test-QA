class Homepage{
    lblTitle(){
        return cy.xpath("//h1[normalize-space()='Welcome!']");
    }
}

export default Homepage;