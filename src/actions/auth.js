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



// var config = {
//   url,
//   method:'post',
//   headers: {'Access-Control-Allow-Origin': '*'},
// };

// export const signin = (data) => {
//   return async (data) => {
//     await axios({
//       method: 'post',
//       url: url,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Accept': 'application/json',
//       },
//       data: {
//         email: data.email,
//         password: data.password,
//       }
//     }).then(function (response) {
//       console.log(response);
//       return response
//     })
//     .catch(function (error) {
//       console.log(error);
//       return error
//     });
//   }

  // return async () => {
  //   return fetch(url,{
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
  // },
  //     body: JSON.stringify(data)
  // })
  // .then(res=>{              
  //     return res.json()
  // })
  // }
