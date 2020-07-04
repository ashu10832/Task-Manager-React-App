const taskReducerDefaultState = []


export default (state = taskReducerDefaultState,action) => {
    switch(action.type){
        case 'SET_TASKS':
            return [...action.tasks]

        case 'NEW_TASK':
            return [...state,action.task]
            case 'LOGGED_OUT':
                return []
        default :
            return state
    }
}