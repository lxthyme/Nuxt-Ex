export default ({ isHMR, app, store, route, params, error, redirect }) => {
  if (isHMR) {
    return
  }

  const defaultLocale = app.i18n.fallbackLocale
  const locale = params.lang || defaultLocale
  console.log('route: ', route)
  if (store.state.locales.indexOf(locale) === -1) {
    return error({
      message:
        'This page could not be found. at: ' +
        route.fullPath +
        '(' +
        store.state.locales +
        ', ' +
        locale +
        ', ' +
        store.state.locales.indexOf(locale) +
        ')',
      statusCode: 404
    })
  }

  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale

  if (
    locale === defaultLocale &&
    route.fullPath.indexOf('/' + defaultLocale) === 0
  ) {
    const toReplace =
      '^/' +
      defaultLocale +
      (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
    const re = new RegExp(toReplace)
    return redirect(route.fullPath.replace(re, '/'))
  }
}
