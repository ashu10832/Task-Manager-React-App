import React from 'react';
import {signin} from '../actions/auth'
const axios = require('axios').default;


export default class LoginPage extends React.Component {

    constructor(props){
        super(props)
    }

    onLoginSubmit = async (e) => {
        e.preventDefault()
        console.log('Submitted')


        // call upon the api and pass my email and password.
        try {
            const response = await signin({
                email:document.querySelector('#email').value,
                password:document.querySelector('#password').value  
            })
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }

        // wait for the response
        // if the response is 200, then get the token
        // if error happens, then display the error

        // const options = {
        //     url: 'http://localhost:3001/users/login',
        //     method: 'POST',
        //     headers: {
        //     // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWZjOTlmYzQ5Y2MzN2RkYzExNGFkOWYiLCJpYXQiOjE1OTM2MTI3OTYsImV4cCI6MTU5NDIxNzU5Nn0.4pl1HbIMsO3FhFIhrNEy5kI0RJcemRUunlk52AITjAg`
        //     },
        //     data: {
        //     email: 'ashu10832@gmail.com',
        //     password: 'testing'
        //     }
        // };

        
        
        // axios(options)
        //     .then(response => {
        //     console.log(response.status);
        //     }).catch((err)=>{
        //         console.log(err);
        //     });


    }


    render(props){

        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.onLoginSubmit}>
                <input id="email" type="text" placeholder="Email" name="email" />
                <input id="password" type="text" placeholder="Password" name="password" />
                <button>Login</button>
                
                </form>
            </div>

        )


    }
}