import { ExpansionPanelActions } from "@material-ui/core";

describe("Form Flow Test - Job History Form", function () {
  it("Renders Input Components", function () {
    cy.visit("/form/work");

    cy.get("form").within(() => {
      cy.get("input").should(($input) => {
        expect($input).to.have.length(5);
      });
    });
  });

  it("Renders Button Components", function () {
    cy.get("#formButton").should(($button) => {
      expect($button).to.have.length(3);
    });
  });
});