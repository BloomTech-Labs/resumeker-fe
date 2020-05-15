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

    cy.get("input").should(($input) => {
      expect($input).to.have.length(3);
    });
  });

  it("General Info Form Renders", function () {
    cy.visit("/form/education");
  });
});
