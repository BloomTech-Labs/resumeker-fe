import { addData } from "../../../../src/actions/resumeFormActions.js";

describe("State Testing", function () {
  it("has expected state on load", () => {
    cy.visit("/");
    cy.setLocalStorage("token", "dumbyToken");
    cy.window()
      .its("store")
      .invoke("getState")
      .should("deep.equal", {
        resumeFormReducer: {
          error: "",
          loading: false,
          resumeData: {
            education: [],
            email: "",
            firstName: "",
            generalSkills: [],
            hobbies: [],
            jobs: [],
            languages: [],
            lastName: "",
            projects: [],
            techSkills: [],
          },
        },
        router: {
          action: "POP",
          location: {
            hash: "",
            pathname: "/",
            query: {},
            search: "",
            state: undefined,
          },
        },
        userReducer: {
          error: null,
          loading: false,
          user: {},
        },
      });

    cy.window().its("store").invoke("getState").its("resumeFormReducer");

    // const getResumeInfo = (win) => {
    //   win.store.getState().its('resumeFormReducer')
    // };
  });

  it("can update generalInfo", function () {
    cy.window().its("store").invoke("dispatch", {
      type: "FORM_ADD_DATA_REQUEST",
    });

    cy.window()
      .its("store")
      .invoke("dispatch", {
        type: "FORM_ADD_DATA_SUCCESS",
        payload: {
          firstName: "tester",
          lastName: "testing",
          email: "Testing@gmail.com",
        },
      });

    cy.window()
      .its("store")
      .invoke("getState")
      .its("resumeFormReducer")
      .its("resumeData")
      .its("firstName")
      .should("deep.equal", "tester");

    cy.window()
      .its("store")
      .invoke("getState")
      .its("resumeFormReducer")
      .its("resumeData")
      .its("lastName")
      .should("deep.equal", "testing");

    cy.window()
      .its("store")
      .invoke("getState")
      .its("resumeFormReducer")
      .its("resumeData")
      .its("email")
      .should("deep.equal", "Testing@gmail.com");
  });

  it("can set/update education information", function () {
    const date = Date.now();

    const education = {
      type: "College",
      schoolName: "Test",
      yearIn: "2016-8-1",
      yearOut: "2020-5-12",
      certificateName: "Bachelors of Computer Science",
      id: date,
    };

    cy.window().its("store").invoke("dispatch", {
      type: "FORM_ADD_EDUCATION_DATA_REQUEST",
    });

    cy.window().its("store").invoke("dispatch", {
      type: "FORM_ADD_EDUCATION_DATA_SUCCESS",
      payload: education,
    });

    const eArray = (win) => {
      var variable = win.store.getState().resumeFormReducer.resumeData
        .education[0];
      return variable;
    };

    cy.window().then(eArray).should("deep.equal", education);

    const updateEducation = {
      type: "Certfication",
      schoolName: "Lambda",
      yearIn: "2018-8-1",
      yearOut: "2020-5-12",
      certificateName: "Endorsement",
      id: date,
    };

    cy.window().its("store").invoke("dispatch", {
      type: "FORM_UPDATE_EDUCATION_DATA_REQUEST",
    });
  });
});
