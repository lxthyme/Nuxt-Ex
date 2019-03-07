// import { getReportData } from '../api/report'
import Util from '~/plugins/util'

export const state = () => {
  return {
    statistics: {},
    reportCounter: '12321'
  }
}

export const getters = {
  statisticsFormat(state) {
    const s = state.statistics
    if (s == null) {
      return {}
    }
    Object.keys(s).forEach(function(k) {
      const v = s[k]
      if (Util.typer(v) === 'Number') {
        s['f_' + k] = v
          .toFixed(0)
          .replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
      }
    })
    return s
  }
}

export const mutations = {
  setStatistics: (state, data) => {
    state.statistics = data
  }
}

export const actions = {
  async loadStatistics({ commit }, params) {
    const result = await this.$api.loadStatistics(params)
    const res = result.data
    commit('setStatistics', res)
    return res.data
  }
}

// const report = {
//     state: {
//         statistics: {}
//     },
//   getters: {
//     statistics: state => {
//       console.log('--->getStatistics: ', state.statistics, '\t\tstate: ', state)
//       return state.statistics
//     }
//   },
//   mutations: {
//     setStatistics: (state, data) => {
//       console.log('--->setStatistics: ', data)
//       state.statistics = data
//     }
//   },
//   actions: {
//     async loadStatistics({ commit }, params) {
//       const result = await this.$api.loadStatistics(params)
//       const res = result.data
//       console.log('RES: ', res, '\t\tparams: ', params)
//       commit('setStatistics', res)
//       return res.data
//     }
//   }
// }

// export default report
