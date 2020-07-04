import React from 'react'
import {connect} from 'react-redux'


const Header = ({isAuth,logoutHandler}) => {


    return (
        <div>
            {isAuth ? <button onClick={logoutHandler}>Logout</button>
            :null
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth:state.auth.loggedIn
    }

}

export default connect(mapStateToProps)(Header)