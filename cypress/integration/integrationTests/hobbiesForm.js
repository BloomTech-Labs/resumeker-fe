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
      cy.get(".singlePageButton").should(($button) => {
        expect($button).to.have.length(3);
      });
    });
  });
});
