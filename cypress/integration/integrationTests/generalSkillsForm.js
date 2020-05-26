//Form Flow Test

describe("Form Flow Test - General Skills Form", function () {
    it("Renders Input Components", function () {
      cy.visit("/form/generalskills");
  
      cy.get("form").within(() => {
        cy.get("input").should(($input) => {
          expect($input).to.have.length(1);
        });
      });
    });
  
    it("Renders Button Components", function () {
      cy.visit("/form/generalskills");
      cy.get("#generalSkillsForm").within(() => {
        cy.get('.singlePageButton').should(($button) => {
          expect($button).to.have.length(3);
        });
      })
  
    });
  
    it("User can add and delete the skills", function () {
      cy.visit("/form/generalskills");
  
      cy.get("#skill").type("Time Management")
      cy.get("#addButton").click()
      cy.get("#skill").type("Communication")
      cy.get("#addButton").click()
      cy.get("#skill").type("Project Management")
      cy.get("#addButton").click()
      cy.get(".listOfGeneralSkills").should(($skill) => {
          expect($skill).to.have.length(3)
      })

      cy.get("#next_languages").click()
      cy.url().should("include", "languages")
  
      cy.get("#previous_generalSkills").click()
      cy.get(".listOfGeneralSkills").should(($skill) => {
        expect($skill).to.have.length(3)
      })
        
  })
});