describe("First Test", function () {
  it("Visits Resumeker", function () {
    cy.visit("/");
  });

  it("Master Form Renders", function () {
    cy.visit("/form");

    cy.contains("Resume Form");
  });

  it("Visits General Info Form Page", function () {
    cy.visit("/form/generalInfo");

    cy.focused().should("have.id", "generalInfoForm");
  });

  it("General Info Form Renders", function () {
    cy.visit("/form/education");
  });
});
