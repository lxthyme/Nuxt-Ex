import express from 'express'

const router = express.Router()

const app = express()

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.req)
  Object.setPrototypeOf(res, app.res)
  req.res = res
  res.req = req
  console.log('router.use')
  next()
})

router.post('/login', (req, res) => {
  console.log('REQ: ', req)
  if (req.body.uname === 'demo' && req.body.upwd === 'demo') {
    req.session.user = {
      uname: 'demo'
    }
    return res.json({
      uname: 'demo'
    })
  }
  res.status(401).json({
    msg: 'Bad Credential!'
  })
})

router.post('/logout', (req, res) => {
  delete req.session.user
  req.json({
    ok: true
  })
})

export default {
  path: '/api',
  handler: router
}
