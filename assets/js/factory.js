import env from '~/env'
// import URI from 'urijs'

const baseURL = env.domain + env.endPoint.length > 0 ? '/' + env.endPoint : ''

export default (axios, ctx) => ({
  async loadStatistics(params) {
    const url = baseURL + '/member/timeline/statistics'
    const res = await axios.get(url, {
      params: params
    })
    return res.data
  },

  async retrieve(params) {
    const url = baseURL + '/sign/retrieve'
    const res = await axios.post(url, params)
    return res.data
  }
})
