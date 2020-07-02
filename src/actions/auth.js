const axios = require('axios').default;

const baseUrl = 'http://localhost:3001'

export const signin = async (data) => {

  const options = {
    url: `${baseUrl}/users/login`,
    method: 'POST',
    data: {
      email: data.email,
      password: data.password
    }
  };

  return axios(options)

}


export const signup = async (data) => {

  const options = {
    url: `${baseUrl}/users`,
    method: 'POST',
    data
  };

  return axios(options)

}
