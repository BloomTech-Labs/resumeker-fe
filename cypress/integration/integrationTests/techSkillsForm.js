//Form Flow Test
// import { removeTechSkill } from "../../../src/actions/resumeFormActions"
// import { resumeFormReducer } from "../../../src/reducers/resumeForm"

describe("Form Flow Test - Tech Skills Form", function () {
    it("Renders Input Components", function () {
      cy.visit("/form/techskills");
  
      cy.get("form").within(() => {
        cy.get("input").should(($input) => {
          expect($input).to.have.length(1);
        });
      });
    });
  
    it("Renders Button Components", function () {
      cy.visit("/form/techskills");
      cy.get("#techSkillsForm").within(() => {
        cy.get('.singlePageButton').should(($button) => {
          expect($button).to.have.length(3);
        });
      })
  
    });
  
    it("User can add and delete the skills", function () {
      cy.visit("/form/techskills");
  
      cy.get("#skill").type("JavaScript")
      cy.get("#addButton").click()
      cy.get("#skill").type("CSS")
      cy.get("#addButton").click()
      cy.get("#skill").type("HTML")
      cy.get("#addButton").click()
      cy.get("#skill").type("React")
      cy.get("#addButton").click()
      cy.get("#skill").type("Redux")
      cy.get("#addButton").click()
      cy.get(".listOfTechSkills").should(($skill) => {
          expect($skill).to.have.length(5)
      })     
      
    //   ADD DELETE TEST
    //   cy.get(".listOfTechSkills").should(($skill) => {
    //     expect($skill).to.have.length(4)
    //   })


      cy.get("#next_generalSkills").click()
      cy.url().should("include", "generalskills")
  
      cy.get("#previous_techSkills").click()
      cy.get(".listOfTechSkills").should(($skill) => {
        expect($skill).to.have.length(5)
      })
        
  })
});