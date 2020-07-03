import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {

    return (
        <div>
            {props.isAuthenticated ? <Route {...props} /> : <Redirect to="/login" />}
        </div>
    )
}

const mapStateToProps = (state,props) => {
    //console.log(state)
    return {
        isAuthenticated: state.auth.loggedIn
    }
}

export default connect(mapStateToProps)(PrivateRoute)

