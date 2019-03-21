import Report from '~/assets/js/api/report.js'
import Sign from '~/assets/js/api/sign.js'
import Center from '~/assets/js/api/center.js'
import Post from '~/assets/js/api/post.js'
import Login from '~/assets/js/api/login.js'
const moment = require('moment')

export default function(ctx, inject) {
  const report = Report(ctx.app.$axios, ctx)
  const sign = Sign(ctx.app.$axios, ctx)
  const center = Center(ctx.app.$axios, ctx)
  const post = Post(ctx.app.$axios, ctx)
  const login = Login(ctx.app.$axios, ctx)

  const api = { ...report, ...sign, ...center, ...post, ...login }
  ctx.$api = api
  inject('api', api)

  function momentShow(timestamp) {
    if (!timestamp || !parseInt(timestamp)) {
      return timestamp
    }
    return moment(timestamp * 1000).fromNow()
  }
  inject('momentShow', momentShow)

  const mom = {
    moment: moment,
    format(timestamp, format) {
      if (!timestamp || !parseInt(timestamp)) {
        return timestamp
      }
      const f = format || 'YYYY-MM-DD'
      return moment(timestamp * 1000).format(f)
    }
  }
  inject('moment', mom)
}
