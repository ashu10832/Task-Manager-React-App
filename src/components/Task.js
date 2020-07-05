import React,{useState} from 'react'

const Task = (props) => {

    const [description,setDescription] = useState(props.task.description)

    return (
        <div>
            {props.editMode && 
                <input 
                    type="text" 
                    value={description} 
                    name="description" 
                    onChange={(e)=>setDescription(e.target.value)}/>
            }
            {!props.editMode && <h3>{props.task.description}</h3>}
            
            <input 
                type="checkbox" 
                id="completed" 
                checked={props.task.completed} 
                onChange={()=>props.toggleStatus(props.task)}
            />

            <h3>{props.task.completed}</h3>
            <h3>{props.task.updatedAt}</h3>
            {props.editMode ? 
                <button onClick={(e)=>props.handleEditTask({...props.task,description})}>Save</button>
                : <button onClick={(e)=>props.handleToggleEditMode(props.task._id)}>Edit</button>
            }
            
            <button onClick={()=>props.handleDeleteTask(props.task._id)}>Delete</button>
        </div>

    )

}

export default Task