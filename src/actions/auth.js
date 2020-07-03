const axios = require('axios').default;

const baseURL = process.env.REACT_APP_BASE_URL
console.log(baseURL)


export const signin = (data) => {
  return async (dispatch) => {
    return axios.post(`${baseURL}/users/login`,{
        email: data.email,
        password: data.password
      }
  ).then((res)=>{
    console.log('Success')
    localStorage.setItem('token', res.data.token)
    dispatch(loginSuccess(res.data.token))
    return res
  })
  }
}

export const signup =  (data) => {
  return async (dispatch) => {
    return axios.post(`${baseURL}/users`,{...data})
      .then((res)=>{
        console.log('New User Created!')
        dispatch(loginSuccess(res.data.token))
        localStorage.setItem('token', res.data.token)
        return res.data.user
      })
  }
}



export const loginSuccess = (token = '') => {
  return {
    type: 'LOGGED_IN',
    token
  }

}


// export const loginFailed = (error = '') => {
//   return {
//     type: 'LOGGED_IN',
//     token
//   }

// }