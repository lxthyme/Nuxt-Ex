import Report from '~/assets/js/api/report.js'
import Sign from '~/assets/js/api/sign.js'

export default function(ctx, inject) {
  const report = Report(ctx.app.$axios, ctx)
  const sign = Sign(ctx.app.$axios, ctx)

  const api = { ...report, ...sign }
  ctx.$api = api
  inject('api', api)
}
