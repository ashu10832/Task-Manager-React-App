import {setAuthHeader} from './common'
import axios from 'axios'
//const axios = require('axios').default;

const baseURL = process.env.REACT_APP_BASE_URL


export const getAllTasks = () => {
    return (dispatch) => {
        return axios.get(`${baseURL}/tasks`,{
            headers: setAuthHeader(),
        }).then((res)=>{
            dispatch(setTasks(res.data))
            return res.data
        })

    }
}


export const addNewTask = (task) => {
    return (dispatch) => {
        return axios.post(`${baseURL}/task`,task,{
            headers:setAuthHeader()
        }).then((res)=>{
            dispatch(newTask(res.data))
            return res.data
        }).catch((err)=>{

        })

    }
}

export const deleteTask = (taskId) => {
    return (dispatch) => {
        return axios.delete(`${baseURL}/tasks/${taskId}`,{
            headers:setAuthHeader()
        }).then((res)=>{
            dispatch(deleteTaskSuccess(res.data))
            return res.data
        }).catch((err)=>{
            return err
        })
    }
}

export const toggleStatus = (task) => {
    return (dispatch) => {
        return axios.patch(`${baseURL}/tasks/${task._id}`,{
            completed:!task.completed
        },{
            headers:setAuthHeader()
        }).then((res)=>{
            dispatch(updateSuccess(res.data))
            return res.data
        }).catch((err)=>{

        })
    }
}


export const editTask = (taskId,edits) => {
    return (dispatch) => {
        return axios.patch(`${baseURL}/tasks/${taskId}`,edits,{
            headers:setAuthHeader()
        }).then((res)=>{
            dispatch(updateSuccess(res.data))
            dispatch(toggleEditMode(taskId))

            return res.data
        }).catch((err)=>{

        })
    }
}

export const toggleEditMode = (taskId) => {
    return {
        type:'TOGGLE_EDIT_MODE',
        taskId
    }

}


export const setTasks = (tasks = []) => {
    return {
        type:'SET_TASKS',
        tasks
    }
}

export const newTask = (task = {}) => {
    return {
        type: 'NEW_TASK',
        task
    }
}

export const deleteTaskSuccess = (task) => {
    return {
        type:'DELETE_TASK',
        task

    }
}

export const updateSuccess = (task) => {
    return {
        type:'UPDATE_TASK',
        task
    }
}