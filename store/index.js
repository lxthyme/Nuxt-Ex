import axios from 'axios'

// const logger = createRenderer({
//   collapsed: true,
//   filter (mutaion, stateBefore, stateAfter) {
//     return true
//   },
//   transformer (state) {
//     return state
//   },
//   mutationTransformer (mutaion) {
//     return mutaion
//   },
//   logger: console
// })
// const store = () => new Vuex.Store({
//   plugins: process.env.NODE_ENV !== 'production' ? [
//     logger
//   ] : [],
// ...

export const state = () => ({
  counter: 0,
  locales: ['en', 'zh'],
  locale: 'en',
  user: null,
  nuxtServerInit: {}
})

export const getters = () => {}

export const mutations = {
  nuxtServerInit: (state, data) => {
    state.nuxtServerInit = data
  },
  increment(state) {
    state.counter++
  },

  setUser: (state, user) => {
    state.user = user
  },

  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

export const actions = {
  async login({ commit }, { uname, upwd }) {
    try {
      const { data } = await axios.post('/api/login', { uname, upwd })
      commit('setUser', data)
    } catch (error) {
      if (error.response && error.response.statusCode === 401) {
        throw new Error('Bad Credentials!')
      }
      throw error
    }
  },
  async logout({ commit }) {
    await axios.post('/api/logout')
    commit('setUser', null)
  }
}

// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'

// import report from './modules/report'

// Vue.use(Vuex)

// const store = () =>
//   new Vuex.Store({
//     state: {
//       user: null,
//       counter: 0
//     },
//     getters: {
//       // statistics: (state) => {
//       //   return state.as
//       // }
//     },
//     mutations: {
//       setUser: (state, user) => {
//         state.user = user
//       }
//     },
//     actions: {
//       nuxtServewInit({ commit }, { req }) {
//         console.log('nuxtServewInit: ', req)
//         if (req.session && req.session.authUser) {
//           commit('setUser', req.session.authUser)
//         }
//       },
//       async login({ commit }, { uname, upwd }) {
//         try {
//           console.log('login: ', uname, ': ', upwd)
//           const { data } = await axios.post('/api/login', { uname, upwd })
//           commit('setUser', data)
//         } catch (error) {
//           console.log('Error: ', error)
//           if (error.response && error.response.status === 401) {
//             throw new Error('Bad Credentials!')
//           }
//           throw error
//         }
//       },
//       async logout({ commit }) {
//         await axios.post('/api/logout')
//         commit('setUser', null)
//       }
//     },
//     modules: {
//       report
//     }
//   })

// export default store
