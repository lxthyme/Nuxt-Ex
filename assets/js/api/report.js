export default (axios, ctx) => ({
  async loadStatistics(params) {
    const url = '/member/timeline/statistics'
    const res = await axios.get(url, {
      params: params
    })
    return res
  }
})
