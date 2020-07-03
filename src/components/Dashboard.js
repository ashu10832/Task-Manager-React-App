import React, { useEffect, useState } from 'react'
import { getAllTasks } from '../actions/task'
import { connect } from 'react-redux'
import TaskList from './TaskList';

// Use hooks
// When logged in, i need to get the tasks and display it to the user

const Dashboard = ({tasks,dispatch}) => {

    //const [tasks, setTasks] = useState([])

    useEffect(() => {
        // get the tasks and set them
        
        const fetchTasks = async () => {
            try {
                const allTasks = await dispatch(getAllTasks())
                console.log(allTasks)
                //setTasks(allTasks)

            } catch (error) {
                console.log(error)
            }
        }

        fetchTasks()
    }, []);


    return (

        <div>
            <h2>Dashboard</h2>
            <TaskList tasks={tasks} />
        </div>
    )
}

const mapStateToProps = (state,props) =>{
    return {
        tasks:state.tasks
    }
}

export default connect(mapStateToProps)(Dashboard)



