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
      cy.get(".singlePageButton").should(($button) => {
        expect($button).to.have.length(3);
      });
    });
  });
});
