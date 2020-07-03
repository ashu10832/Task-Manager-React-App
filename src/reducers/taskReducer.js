const taskReducerDefaultState = []


export default (state = taskReducerDefaultState,action) => {
    switch(action.type){
        case 'SET_TASKS':
            return [...action.tasks]
        default :
            return state
    }

}