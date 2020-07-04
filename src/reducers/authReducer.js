const authReducerDefaultState = {
    loggedIn:localStorage.getItem('token') ? true : false
}

export default (state = authReducerDefaultState,action) => {
    switch(action.type){
        case 'LOGGED_IN':
            return {
                ...state,
                loggedIn:true,
            }
        case 'LOGGED_OUT':
            return {
                ...state,
                loggedIn:false
            }
        default:
            return state
    }
}