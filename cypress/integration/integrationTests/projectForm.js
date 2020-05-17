//Form Flow Test

describe("Form Flow Test - Personal Projects Form", function () {
    it("Renders Input Components", function () {
      cy.visit("/form/projects");
  
      cy.get("form").within(() => {
        cy.get("input").should(($input) => {
          expect($input).to.have.length(6);
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

    it("Testing required fields", function() {
        cy.visit("/form/projects")
        cy.get("#next_techSkills").click()
        cy.url().should("include", "projects")

        cy.get("#projectName").type("First Project")
        cy.get("#next_techSkills").click()
        cy.url().should("not.include", "techskills")

        cy.get("#projectName").clear()
        cy.get("#roleDescription").type("Worked with React & Redux")
        cy.get("#next_techSkills").click()
        cy.url().should("include", "projects")

        cy.get("#roleDescription").clear()
        cy.get("#projectName").type("First Project")
        cy.get("#roleDescription").type("Worked with React & Redux")
        cy.get("#next_techSkills").click()
        cy.url().should("include", "techskills")
    })
  
    it("User can type his info, go to the next page, come back and see his info below the form", function () {
      cy.visit("/form/projects");
  
      cy.get("#projectName").type("First Project")
      cy.get("#projectStartDate").type("2019-09-25")
      cy.get("#projectEndDate").type("2019-12-29")
      cy.get("#role").type("Front-End Developer")
      cy.get("#roleDescription").type("Worked with React & Redux")
      cy.get("#link").type("Just link")
      cy.get("#next_techSkills").click()
      cy.url().should("not.include", "techskills")
      cy.get("#link").clear()
      cy.get("#link").type("http://www.just-link.net")
      cy.get("#next_techSkills").click()
      cy.url().should("include", "techskills")
  
      cy.get("#previous_projects").click()
  
      cy.get(".ProjectsTesting").should(($project) => {
        expect($project).to.have.length(1)
      })
        
  })
  });
  