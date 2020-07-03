import  React, {useEffect, useState } from 'react'
import { getAllTasks } from '../actions/task'
import TaskList from './TaskList';

// Use hooks
// When logged in, i need to get the tasks and display it to the user

const Dashboard = (props) => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        // get the tasks and set them

        const fetchTasks =  async () => {
            try {
                const response = await getAllTasks()
                console.log(response)
                setTasks(response.data)

            } catch (error) {
                console.log(error)
            }
        }

        fetchTasks()


    }, []);


    return (

        <div>
            <h2>Dashboard</h2>
            <TaskList tasks = {tasks} />
        </div>
    )
}

export default Dashboard