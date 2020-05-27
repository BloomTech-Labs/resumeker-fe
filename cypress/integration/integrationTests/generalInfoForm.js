describe("Form Flow Test - General Info Form", function () {
  it("Renders Components", function () {
    cy.visit("/form/generalInfo");

    cy.get("form").within(() => {
      cy.get("input").should(($input) => {
        expect($input).to.have.length(3);
      });
    });
  });

  it("Runs through General Info", function () {
    cy.get("form").within(() => {
      cy.get('input[name="firstName"]').type("Test");
      cy.get('input[name="lastName"]').type("Lastname");
      cy.get('input[name="email"]').type("testEmail@gmail.com");
    });

    cy.get('button[type="submit"]').click();
  });
});
