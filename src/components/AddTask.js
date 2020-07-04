import React from 'react'
//import { connect } from 'react-redux'
import { useForm } from "react-hook-form";
import {addNewTask} from '../actions/task'
import { connect } from 'react-redux'




const AddTask = (props) => {

    const { register, handleSubmit, watch, errors ,setValue} = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        try {
            //dispatch a call to add new task
            const res = await props.dispatch(addNewTask(data))
            console.log(res)
            setValue("description","")

        } catch (error) {
            console.log(error)
            
        }

    }



    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="New Task" name="description" ref={register} />
        <button id="addtask" type="submit" >Add Task</button>
        </form>
        </div>
    )

}

export default connect()(AddTask)
