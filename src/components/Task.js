import React from 'react'

const Task = (props) => {

    return (
        <div>
            <h3>{props.task.description}</h3>
            <h3>{props.task.completed}</h3>
            <h3>{props.task.updatedAt}</h3>
        </div>

    )

}

export default Task