import React, {useState} from 'react'
import {Switch, Route, useRouteMatch} from 'react-router-dom'

//Components import
import GeneralInfo from './generalInfo.js'
import Education from './education.js'

//State import
// import 

function MasterForm() {

    const {path, url} = useRouteMatch();

    return(
        <div>
            <h1>Resume Form</h1>
            <Switch>
                <Route path={`${url}/generalInfo`} component={GeneralInfo}/>
                <Route path={`${url}/education`} component ={Education}/>
            </Switch>
        </div>
    )

}

export default MasterForm
