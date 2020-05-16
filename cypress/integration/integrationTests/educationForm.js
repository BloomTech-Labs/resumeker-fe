describe("Education Form", function () {
    it("Has all requires pages", function () {
      cy.visit("/form/education");

      cy.get("form").within(() => {
          cy.get("input").should(($input) => {
            expect($input).to.have.length(5)
          })
      });
    });

    it("The education type field is the selector and has 4 options", function () {
        cy.visit("/form/education");

        cy.get("form").within(() => {
            cy.get('#type').children()

        });
    })
  });
  