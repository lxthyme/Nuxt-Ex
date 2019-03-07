// import axios from 'axios'
// import {
//   baseURL,
//   timeout
// } from '~/app.config'

export default ({ app, $axios }) => {
  // $axios.interceptors.request.use((config) => {
  //   // console.log('1. 发送请求之前CONFIG: ', config)
  //   return config
  // }, (error) => {
  //   // 请求错误时
  //   return Promise.reject(error)
  // })

  // $axios.interceptors.response.use((response) => {
  //   // console.log('2. RESPONSE: ', response)
  //   return response
  // }, (error) => {
  //   return Promise.reject(error)
  // })

  $axios.onRequest(config => {
    // console.log('APP: ', app, '\t\t$AXIOS: ', $axios)
    // console.log('3. CONFIG: ', config)
    config.headers = {
      ...config.headers,
      ...config.params
    }
    // config.withCredentials = true
    return config
  })
  $axios.onResponse(res => {
    // console.log('4. RES: ', res)
    const data = res.data
    if (data.code !== 10000) {
      return Promise.reject(data)
    }
  })
  $axios.onError(error => {
    console.log('5. ERROR: ', error)
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      app.context.redirect('/400')
    }
    return Promise.reject(error)
  })
}

// const request = axios.create({
//   baseURL,
//   timeout
// })

// // 拦截器
// request.interceptors.request.use((config) => {
//   return config
// }, (error) => {
//   return Promise.reject(error)
// })

// request.interceptors.response.use((response) => {
//   return response
// }, (error) => {
//   return Promise.reject(error)
// })

// export default request
