import React from 'react';
import { signup } from '../actions/auth'
import {connect} from 'react-redux'



// TODO: Data Validation


class SignUpPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            signedUp: false,
            error: ''
        }
    }


    onSignUpSubmit = async (e) => {
        e.preventDefault()
        console.log('Submitted')

        // call upon the api and pass my email and password.
        try {
            const user = await this.props.dispatch(signup({
                name: document.querySelector('#name').value,
                age: Number.isInteger(document.querySelector('#age').value) ? document.querySelector('#age').value : undefined,
                email: document.querySelector('#email').value,
                password: document.querySelector('#password').value
            }))

            console.log(user)
            this.setState(() => ({
                signedUp: true,
                error: ''
            }))
            this.props.history.push("/");
        } catch (error) {
            this.setState(() => ({
                error: 'Unable to signup, please check again'
            }))
            console.log(error)
        }
    }


    render(props) {

        return (
            <div>
                <h1>Sign Up</h1>

                {this.state.signedUp && <h3>Signedup Successfully!</h3>}
                {this.state.error && <h3>{this.state.error}</h3>}
                <form onSubmit={this.onSignUpSubmit}>
                    <input id="name" type="text" placeholder="Name" name="name" />
                    <input id="age" type="number" placeholder="Age" name="age" />
                    <input id="email" type="text" placeholder="Email" name="email" />
                    <input id="password" type="text" placeholder="Password" name="password" />
                    <button>SignUp</button>

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

export default connect(mapStateToProps)(SignUpPage)