const axios = require('axios').default;


const baseURL = process.env.REACT_APP_BASE_URL

const tempToken = localStorage.getItem('token')


export const getAllTasks = () => {
    return (dispatch) => {
        return axios.get(`${baseURL}/tasks`,{
            headers: {'Authorization': `Bearer ${tempToken}`},
        }).then((res)=>{
            dispatch(setTasks(res.data))
            return res.data
        })

    }
}

export const setTasks = (tasks = []) => {
    return {
        type:'SET_TASKS',
        tasks
    }
}