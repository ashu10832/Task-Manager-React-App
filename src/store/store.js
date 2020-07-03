import { createStore ,applyMiddleware ,combineReducers, compose} from 'redux'
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer'
import taskReducer from '../reducers/taskReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
    const store = createStore(combineReducers({
        auth:authReducer,
        tasks:taskReducer
    }),composeEnhancers( applyMiddleware(thunk)))
    console.log('Store Created!')
    return store
}