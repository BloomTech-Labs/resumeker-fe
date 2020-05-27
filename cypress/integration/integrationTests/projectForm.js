//Form Flow Test

describe("Form Flow Test - Personal Projects Form", function () {
  it("Renders Input Components", function () {
    cy.visit("/form/projects");

    cy.get("form").within(() => {
      cy.get("input").should(($input) => {
        // expect($input).to.have.length(6);
        expect($input).to.have.length(5);
      });
    });
  });

  it("Renders Button Components", function () {
    cy.visit("/form/work");
    cy.get("#workForm").within(() => {
      cy.get("button").should(($button) => {
        expect($button).to.have.length(3);
      });
    });
  });
});
