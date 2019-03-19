// import axios from 'axios'
// import {
//   baseURL,
//   timeout
// } from '~/app.config'

// const __isDEV = Object.is(process.env.NODE_ENV, 'production')
// const baseConfig = {
//   // API_HOST or HOST
//   host: '',
//   // API_PORT or PORT
//   port: '',
//   // API_PREFIX
//   prefix: '/',
//   // API_URL
//   baseURL: __isDEV ? 'https://apitest4.vaffle.com' : 'https://api.vaffle.com',
//   // API_URL_BROWSER
//   browserBaseURL: __isDEV
//     ? 'https://apitest5.vaffle.com'
//     : 'https://api.vaffle.com',
//   // https: false,
//   progress: true,
//   // proxy: true,
//   retry: 3,
//   // credentials: false,
//   debug: __isDEV,
//   // proxyHeaders: true,
//   // proxyHeadersIgnore: ['host', 'accept'],

//   timeout: 60000,
//   headers: {},
//   params: {
//     ID: 12321
//   },
//   // paramsSerializer: function (params) {
//   //   return Qs.stringify(params, {arrayFormat: 'brackets'})
//   // },
//   // responseType: 'json',
//   // responseEncoding: 'utf8',
//   // xsrfCookieName: 'XSRF-TOKEN',
//   // xsrfHeaderName: 'X-XSRF-TOKEN',
//   // maxRedirects: 5,
//   // maxContentLength: 2000,
//   // socketPath: null,
//   // httpAgent: new http.Agent({ keepAlive: true }),
//   // httpsAgent: new https.Agent({ keepAlive: true }),
//   // http_proxy | https_proxy | no_proxy
//   proxy: {
//     host: '127.0.0.1',
//     port: 9000
//     // auth: {
//     //   username: 'mikeymike',
//     //   password: 'rapunz3l'
//     // }
//   },
//   data: {
//     firstName: 'Damon 123'
//   },
//   transformRequest: [
//     function(data, headers) {
//       console.log(
//         '--->transformRequest >>>data: ',
//         data,
//         '\t\theaders: ',
//         headers
//       )
//       return data
//     }
//   ],
//   validateStatus: function(status) {
//     console.log('status: ', status)
//     return status >= 200 && status < 300 // default
//   },
//   transformResponse: [
//     function(data) {
//       console.log('--->transformResponse >>>data: ', data)
//     }
//   ],
//   onUploadProgress: function(progressEvent) {
//     // Do whatever you want with the native progress event
//     console.log('progressEvent: ', progressEvent)
//   }
//   // cancelToken: new CancelToken(function (cancel) {
//   //   console.log('cancelToken: ', cancel)
//   // })
// }
// console.log('baseConfig: ', baseConfig)

export default ({ app, $axios }) => {
  // $axios = axios.create(baseConfig)

  $axios.onRequest(config => {
    config.headers = {
      ...config.headers,
      ...config.params,
      version: '3.6.1'
    }
    // config.withCredentials = true
    return config
  })
  $axios.onResponse(res => {
    const data = res.data
    if (data.code === 10000) {
      return Promise.resolve(data)
    } else {
      return Promise.reject(data)
    }
  })
  $axios.onError(error => {
    if (error.response) {
      // (data, status, headers)
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
    } else if (error.request) {
      // (request)
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
    } else {
      // Something happened in setting up the request that triggered an Error
    }
    // (config)
    // const code = parseInt(error.response && error.response.status)
    // if (code === 400) {
    //   app.context.redirect('/400')
    // }
    return Promise.reject(error)
  })

  // $axios.onRequestError(error => {
  //   // return Promise.reject(error)
  // })

  // $axios.onResponseError(error => {
  //   // return Promise.reject(error)
  // })
}
