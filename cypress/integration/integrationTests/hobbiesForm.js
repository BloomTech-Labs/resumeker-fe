//Form Flow Test

describe("Form Flow Test - Hobbies Form", function () {
    it("Renders Input Components", function () {
      cy.visit("/form/hobbies");
  
      cy.get("form").within(() => {
        cy.get("input").should(($input) => {
          expect($input).to.have.length(1);
        });
      });
    });
  
    it("Renders Button Components", function () {
      cy.visit("/form/hobbies");
      cy.get("#hobbiesForm").within(() => {
        cy.get('.singlePageButton').should(($button) => {
          expect($button).to.have.length(3);
        });
      })
  
    });
  
    it("User can add and delete the hobbies", function () {
      cy.visit("/form/hobbies");
  
      cy.get("#hobby").type("playing chess")
      cy.get("#addButton").click()
      cy.get("#hobby").type("reading")
      cy.get("#addButton").click()
      cy.get("#hobby").type("traveling")
      cy.get("#addButton").click()
      cy.get(".listOfHobbies").should(($hobby) => {
          expect($hobby).to.have.length(3)
      })

      cy.get("#next_review").click()
      cy.url().should("include", "review")
        
  })
});