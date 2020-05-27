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
      cy.get(".singlePageButton").should(($button) => {
        expect($button).to.have.length(3);
      });
    });
  });
});
