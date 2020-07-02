import React from 'react'
import {Switch,Route, BrowserRouter} from 'react-router-dom'
import LoginPage from '../components/LoginPage'
import SignUpPage from '../components/SignUpPage'
import Dashboard from '../components/Dashboard'

export default () => {

    return (
        <BrowserRouter>
        <Switch>
        
        <Route path="/login">
            <LoginPage />
        </Route>

        <Route path="/signup">
            <SignUpPage />
        </Route>

        <Route path="/">
            <Dashboard />
        </Route>
        
        
        </Switch>
        </BrowserRouter>


    )



}