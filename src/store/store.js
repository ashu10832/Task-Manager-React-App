import { createStore } from 'redux'

import authReducer from '../reducers/authReducer'


export default () => {
    const store = createStore(authReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    console.log('Store Created!')
    return store
}