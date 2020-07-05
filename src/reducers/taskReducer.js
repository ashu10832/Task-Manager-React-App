const taskReducerDefaultState = []


export default (state = taskReducerDefaultState,action) => {
    switch(action.type){
        case 'SET_TASKS':
            return [...action.tasks]

        case 'NEW_TASK':
            return [...state,action.task]
            case 'LOGGED_OUT':
                return []
            case 'DELETE_TASK':
                return state.filter((task)=>{
                    return task._id !== action.task._id
                })
            case 'UPDATE_TASK':
                return state.map((task)=>task._id === action.task._id ? {...task,...action.task} : task)
            case 'TOGGLE_EDIT_MODE':
                return state.map((task)=>task._id === action.taskId ? 
                task.editMode ? {...task,editMode:!task.editMode} : {...task,editMode:true} : task)
        default :
            return state
    }
}