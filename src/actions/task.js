const axios = require('axios').default;


const baseURL = process.env.REACT_APP_BASE_URL

const tempToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWZjOTlmYzQ5Y2MzN2RkYzExNGFkOWYiLCJpYXQiOjE1OTM2MTI3OTYsImV4cCI6MTU5NDIxNzU5Nn0.4pl1HbIMsO3FhFIhrNEy5kI0RJcemRUunlk52AITjAg'

export const getAllTasks = async () => {

    return axios.get(`${baseURL}/tasks`,{
        headers: {'Authorization': `Bearer ${tempToken}`},
    })

}