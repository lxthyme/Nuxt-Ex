export default (axios, ctx) => ({
  async retrieve(params) {
    const url = '/sign/retrieve'
    const res = await axios.post(url, params)
    return res
  }
})
