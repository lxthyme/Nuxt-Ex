// import { getReportData } from '../api/report'

const report = {
  state: {
    statistics: {}
  },
  getters: {
    statistics: state => {
      console.log('--->getStatistics: ', state.statistics, '\t\tstate: ', state)
      return state.statistics
    }
  },
  mutations: {
    setStatistics: (state, data) => {
      console.log('--->setStatistics: ', data)
      state.statistics = data
    }
  },
  actions: {
    async loadStatistics({ commit }, params) {
      const result = await this.$api.loadStatistics(params)
      const res = result.data
      console.log('RES: ', res, '\t\tparams: ', params)
      commit('setStatistics', res)
      return res.data
    }
  }
}

export default report
