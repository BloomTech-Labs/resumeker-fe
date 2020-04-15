import React from 'react'
 
import Profile_Settings_Update from "./Profile_settings_update"
import Profile_Settings_Add from "./Profile_settings_add"

// RC1-2

// QUESTION: Do we need both (update and add) or we can do everything in one component (update)? 

function Profile_Settings() {
    return (
        <div>
            Profile Settings Page
            {/* 
            user can view his info he entered during registration, add/delete/update it 
            Info:
            - photo
            - name
            - last name
            - email
            - phone
            - date of birth
            - address? 
            - quantity of resumes (generated automaticaly )
            - etc (what else can be added to general account info?)
            */}
        </div>
    )
}

export default Profile_Settings