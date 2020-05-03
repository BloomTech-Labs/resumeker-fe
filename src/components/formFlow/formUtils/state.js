export const formState = {

    general:{
        firstName: "",
        lastName: "",
        email: ""  
    },
    education: {
        type: "",
        schoolName: "",
        yearIn: "",
        yearOut: "",
        certificateName: ""
    },
    work: {
        jobTitle: "",
        companyName: "",
        startYear: "",
        endYear: "",
        jobDescription: "",
    }

}

export const generalState = {
    ...formState.general
}