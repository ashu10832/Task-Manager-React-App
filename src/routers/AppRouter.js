import React from 'react'
import {Switch,Route, BrowserRouter} from 'react-router-dom'
import LoginPage from '../components/LoginPage'
import SignUpPage from '../components/SignUpPage'
import Dashboard from '../components/Dashboard'
import PrivateRoute from './PrivateRoute'

export default () => {

    return (
        <BrowserRouter>
        <Switch>
        
        <Route path="/login" component={LoginPage}/>

        <Route path="/signup" component={SignUpPage}/>

        <PrivateRoute path="/" component={Dashboard}/>
        
        </Switch>
        </BrowserRouter>


    )



}