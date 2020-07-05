import React from 'react'
import Task from './Task'
import {connect } from 'react-redux'
import {deleteTask,toggleStatus,editTask, toggleEditMode} from '../actions/task'


const TaskList = (props) => {

    const handleEditTask = async (task) => {
        const edits = {
            description:task.description,
            completed:task.completed
        }
        console.log('Edit task called')
        try {
            const res =  await props.dispatch(editTask(task._id,edits))
        } catch (error) {
            console.log(error)
        }
    }

    const handleDeleteTask = async (taskId) => {
        console.log(taskId)
        try {
            const res = await props.dispatch(deleteTask(taskId))
        } catch (error) {
            console.log(error)
        }
    }

    const handleToggleStatus = async (task) => {
        console.log('Toggle status called:')
        try {
            const res = await props.dispatch(toggleStatus(task))
        } catch (error) {
            console.log(error)
        }
    }

    const handleToggleEditMode = (taskId) => {
        // update the redux store to change edit mode for the given task
        props.dispatch(toggleEditMode(taskId))

    }

    return (
        <div>
        {props.tasks.map((task)=> {
            return <Task 
                task={task} 
                key={task._id} 
                handleDeleteTask={handleDeleteTask} 
                handleEditTask={handleEditTask}
                toggleStatus={handleToggleStatus}
                editMode={task.editMode ? task.editMode : false}
                handleToggleEditMode={handleToggleEditMode}
                />
        })}
        </div>
    )
}



export default connect()(TaskList)