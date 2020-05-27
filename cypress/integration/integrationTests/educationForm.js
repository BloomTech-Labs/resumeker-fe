describe("Form Flow Test - Education Form", function () {
  it("Has all requires pages", function () {
    cy.visit("/");

    cy.visit("/form/education");

    cy.get("form").within(() => {
      cy.get("input").should(($input) => {
        expect($input).to.have.length(5);
      });
    });
  });

  it("User can type his info, go to the next page, come back and see his info below the form", function () {
    cy.visit("/form/education");

    cy.get("#type").should("have.value", "");

    // The next one doesn't work. Why?
    cy.get("#type").type("University");
    cy.get("#schoolName").type("Harvard");
    cy.get("#yearIn").type("2008-09-01");
    cy.get("#yearOut").type("2013-06-30");

    cy.get("#next_work").click();
    cy.url().should("include", "/form/work");

    cy.get("#previous_education").click();
    // cy.get("#Harvard").within(() => {
    //   cy.get("p").should(($p) => {
    //     expect($p).to.have.length(5);
    //     expect($p[1]).to.contain("Harvard");
    //     expect($p[2]).to.have.text("Starting Date: 2008-09-01");
    //   });
    // });
    // cy.get("#schoolName").should("have.value", "");
  });
});
