import React from 'react';
import {signin} from '../actions/auth'
import {connect} from 'react-redux'


class LoginPage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            error:'',
            loggedIn:false
        }
    }

    onLoginSubmit = async (e) => {
        e.preventDefault()
        console.log('Submitted')

        // call upon the api and pass my email and password.
        try {
            const response = await this.props.dispatch(signin({
                email:document.querySelector('#email').value,
                password:document.querySelector('#password').value  
            }))
            
            console.log(response.data)
            this.setState(()=>({
                error:'',
                loggedIn:true
            }))
            //this.props.dispatch(login())
            //localStorage.setItem('token', response.data.token)
            this.props.history.push("/");
        } catch (error) {
            console.log(error)
            this.setState(()=>({
                error:'Unable to log in',
                loggedIn:false
            }))
        }
    }


    render(props){

        return (
            <div>
                <h1>Login</h1>
                {this.state.error && <h3>{this.state.error}</h3>}
                {this.state.loggedIn && <h3>Logged In Successfully!</h3>}

                <form onSubmit={this.onLoginSubmit}>
                <input id="email" type="text" placeholder="Email" name="email" />
                <input id="password" type="text" placeholder="Password" name="password" />
                <button>Login</button>
                
                </form>
            </div>

        )
    }
}

const mapStateToProps = (state,props) =>{
    return {
        ...state
    }
}

export default connect(mapStateToProps)(LoginPage)