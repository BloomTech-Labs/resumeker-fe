import React from "react"
import { connect } from "react-redux"

import { addSkill } from "../../actions/resumeFormActions"

function Skills (props) {
    return(
        <div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        resumeData: state.resumeFormReducer.resumeData,
        resumeError: state.resumeFormReducer.error,
        resumeLoading: state.resumeFormReducer.loading,
    }
  }

export default connect(mapStateToProps, {addSkill})(Skills);