export default (axios, ctx) => ({
  async memberCenter(params) {
    const url = '/web/member/center'
    const res = await axios.post(url, params)
    return res
  },
  async memberPost(params) {
    const url = '/web/member/posts'
    const res = await axios.post(url, params)
    return res
  },
  async memberInfo(params) {
    const url = '/web/member/info'
    const res = await axios.post(url, params)
    return res
  },
  async memberNewsList(params) {
    const url = '/web/member/news/list'
    const res = await axios.post(url, params)
    return res
  }
})
