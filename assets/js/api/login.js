export default (axios, ctx) => ({
  async login(params) {
    const url = '/web/sign/in'
    const res = await axios.post(url, params)
    return res
  }
})
