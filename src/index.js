import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import configureStore from './store/store'

const store = configureStore()

console.log(process.env.BASE_URL)

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// Routes

// LoginPage -> Success->Dashboard Fail->Error
// SignUpPage -> Success->Dashboard Fail->Error
// DashBoard ->  Show all tasks -> TaskList -> Task
// CreateNewTask
// EditTask
// NotFoundPage