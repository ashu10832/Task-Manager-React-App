import React, { useEffect } from 'react'
import { getAllTasks } from '../actions/task'
import { connect } from 'react-redux'
import TaskList from './TaskList';
import AddTask from './AddTask'
import Header from './Header'
import {logout} from '../actions/auth'
import Footer from './Footer';

// Use hooks
// When logged in, i need to get the tasks and display it to the user

const Dashboard = ({tasks,dispatch,history}) => {

    const logoutHandler = async() => {

        try {
            const res = await dispatch(logout())
            console.log(res)
            history.push('/')
        } catch (error) {
         console.log(error)   
        }
    }


    // called once when dashboard is rendered
    //used to fetch the tasks andset in the redux-store
    useEffect(() => {
        console.log('dashboard useffect is called')
        console.log(localStorage.getItem('token'))

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

        <div className="wrapper">
            <Header logoutHandler={logoutHandler}/>
            <div className="container content">
            <h2 className="dashboard__heading">My Tasks</h2>
            <AddTask />
            <TaskList tasks={tasks} />
            </div>
            <Footer />

        </div>
    )
}

const mapStateToProps = (state,props) =>{
    return {
        tasks:state.tasks
    }
}

export default connect(mapStateToProps)(Dashboard)



