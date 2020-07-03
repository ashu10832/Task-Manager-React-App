import React from 'react'
import Task from './Task'


const TaskList = (props) => {

    return (
        <div>
        
        {props.tasks.map((task)=> {
            return <Task task={task} key={task._id} />
        })}
        
        </div>

    )
}

export default TaskList