import React from 'react'
import {connect} from 'react-redux'


const Header = ({isAuth,logoutHandler}) => {


    return (
        <div className="header">
        <h3 className="header__title">Task App</h3>
            {isAuth ? <button className="header__logout" onClick={logoutHandler}>Logout</button>
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