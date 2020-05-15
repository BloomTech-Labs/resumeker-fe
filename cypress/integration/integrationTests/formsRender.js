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
  });

  it("Education Form Renders", function () {
    cy.visit("/form/education");
  });

  it("Education Form Renders", function () {
    cy.visit("/form/education");
  });

  it("Work History Form Renders", function () {
    cy.visit("/form/work");
  });

  it("Personal Projects Form Renders", function () {
    cy.visit("/form/projects");
  });

  it("Technical Skills Form Renders", function () {
    cy.visit("/form/techskills");
  });

  it("General Skills Form Renders", function () {
    cy.visit("/form/generalskills");
  });

  it("Languages Form Renders", function () {
    cy.visit("/form/language");
  });

  it("Hobbies Form Renders", function () {
    cy.visit("/form/hobbies");
  });

  it("Review Form Renders", function () {
    cy.visit("/form/review");
  });
});
