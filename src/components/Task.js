import React, { useState } from 'react'
import moment from 'moment'

const Task = (props) => {

    const [description, setDescription] = useState(props.task.description)

    return (
        <div>
            <div className="task">

                <input
                    className="task__completed"
                    type="checkbox"
                    id="completed"
                    checked={props.task.completed}
                    onChange={() => props.toggleStatus(props.task)}
                />
                {props.editMode &&
                    <input
                        className="add-option__input"
                        type="text"
                        value={description}
                        name="description"
                        onChange={(e) => setDescription(e.target.value)} />
                }
                {!props.editMode && <p className="task__description">{props.task.description}</p>}




                {props.editMode ?
                    <button className="button--link" onClick={(e) => props.handleEditTask({ ...props.task, description })}>Save</button>
                    : <button className="button--link" onClick={(e) => props.handleToggleEditMode(props.task._id)}>Edit</button>
                }

                <button className="button--link" onClick={() => props.handleDeleteTask(props.task._id)}>Delete</button>
            </div>
            <p className="task__date">{moment(props.task.updatedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>

    )

}

export default Task