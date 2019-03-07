import Factory from '~/assets/js/factory.js'

export default function(ctx, inject) {
  const api = Factory(ctx.app.$axios, ctx)
  ctx.$api = api
  inject('api', api)
}
