export default ({ store, error }) => {
  if (!store.state.user) {
    error({
      msg: 'You are not login, please login first!',
      statusCode: '999'
    })
  }
}
