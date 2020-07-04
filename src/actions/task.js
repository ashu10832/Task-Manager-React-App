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