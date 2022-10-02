const exp = require("constants");

class Data{
    lblPemasukan(){
        return cy.xpath("//h1[normalize-space()='Pemasukan']");
    }
    lblPengeluaran(){
        return cy.xpath("//h1[normalize-space()='Pengeluaran']");
    }
    lblTimestamp(){
        return cy.contains("TimeStamp");
    }
    lblDeskripsi(){
        return cy.contains("Deskripsi");
    }
    lblJumlah(){
        return cy.contains("Jumlah");
    }
    txtStart(){
        return cy.xpath("//input[@name='start']");
    }
    txtEnd(){
        return cy.xpath("//input[@name='end']");
    }
    btnFilter(){
        return cy.xpath("//input[@value='Filter']")
    }
}

export default Data;