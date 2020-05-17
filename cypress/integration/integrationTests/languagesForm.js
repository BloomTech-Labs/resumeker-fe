//Form Flow Test

describe("Form Flow Test - Languages Form", function () {
    it("Renders Input Components", function () {
      cy.visit("/form/languages");
  
      cy.get("form").within(() => {
        cy.get("input").should(($input) => {
          expect($input).to.have.length(1);
        });
      });
    });
  
    it("Renders Button Components", function () {
      cy.visit("/form/languages");
      cy.get("#languagesForm").within(() => {
        cy.get('.singlePageButton').should(($button) => {
          expect($button).to.have.length(3);
        });
      })
  
    });
  
    it("User can add and delete the languages", function () {
      cy.visit("/form/languages");
  
      cy.get("#language").type("Spanish")
      cy.get("#addButton").click()
      cy.get("#language").type("Italian")
      cy.get("#addButton").click()
      cy.get(".listOfLanguages").should(($language) => {
          expect($language).to.have.length(2)
      })

      cy.get("#next_hobbies").click()
      cy.url().should("include", "hobbies")
  
      cy.get("#previous_languages").click()
      cy.get(".listOfLanguages").should(($language) => {
        expect($language).to.have.length(2)
      })
        
  })
});