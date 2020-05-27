//Form Flow Test

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
    cy.visit("/form/work");
    cy.get("#workForm").within(() => {
      cy.get('button').should(($button) => {
        expect($button).to.have.length(3);
      });
    })

  });

  it("User can type his info, go to the next page, come back and see his info below the form", function () {
    cy.visit("/form/work");

    cy.get("#jobTitle").type("Recruiter")
    cy.get("#companyName").type("Super Cool Company")
    cy.get("#startYear").type("2015-05-25")
    cy.get("#endYear").type("2017-06-12")
    cy.get("#jobDescription").type("1. screened candidates’ profiles according to positions’ requirements via job's portal, social networks, LinkedIn, etc; 2. analyzed at least 200 profiles per day; 3. took a part in different recruiting activities (competition, creating video etc.) ")

    cy.get("#anotherJob").click()
    cy.get("#jobTitle").should("have.value", "")

    cy.get("#jobTitle").type("Junior Full-Stack Developer")
    cy.get("#companyName").type("One More Super Cool Company")
    cy.get("#startYear").type("2019-11-23")
    cy.get("#endYear").type("2020-04-12")
    cy.get("#jobDescription").type("A lot of things had been done.")

    cy.get("#next_projects").click()
    cy.url().should("include", "/form/projects")

    cy.get("#previous_work").click()

    cy.get(".JobForTesting").should(($job) => {
      expect($job).to.have.length(2)
    })
      
})
});
