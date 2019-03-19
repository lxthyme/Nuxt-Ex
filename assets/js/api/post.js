export default (axios, ctx) => ({
  async postsLists(params) {
    const url = '/web/posts/lists'
    const res = await axios.post(url, params)
    return res
  }
})
