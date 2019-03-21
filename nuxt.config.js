// import bodyParser from 'body-parser'
// import session from 'express-session'
// import bodyParser from 'body-parser'
// import session from 'express-session'
// const bodyParser = require('body-parser')
// const session = require('express-session')
const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8'
      },
      // <meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  

  

  /*
   ** Customize the progress-bar color
   */
  // loading: {
  //   color: '#fff'
  // },
  loading: '~/components/loading.vue',

  /*
   ** Global CSS
   */
  css: [
    '~assets/css/normalize.css',
    // '~assets/css/lib/swiper.css',
    '~assets/css/router-transition.css',
    '~assets/css/common.css',
    {
      src: '~assets/scss/base.scss',
      lang: 'scss'
    }
  ],

  // router: {
  //   middleware: 'i18n'
  // },
  router: {
    middleware: 'i18n'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/axios',
      ssr: false
    },
    {
      src: '~/plugins/i18n'
    },
    {
      src: '~/plugins/api'
    },
    {
      src: '~/plugins/player'
    }
  ],

  generate: {
    routes: ['/', '/about', '/zh', '/zh/about']
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    retry: {
      retries: 2
    },
    debug: process.env._ENV !== 'production',
    // baseURL: 'https://apitest.vaffle.com',
    browserBaseURL:
      process.env._ENV === 'production'
        ? 'https://api.vaffle.com'
        : 'https://apitest.vaffle.com',
        // : 'https://apibeta.vaffle.com',
        // : 'http://127.0.0.1:3039',
    // browserBaseURL: process.env._ENV === 'production' ?
    //   'https://api.vaffle.com' : 'http://172.100.13.23:3039',
    // baseURL: process.env._ENV == 'production' ? 'https://api.vaffle.com' : 'https://apitest3.vaffle.com',
    // prefix: '/233',
    // withCredentials: true,
    timeout: 60000,
    proxyHeaders: false,
    credentials: false,
    proxy: process.env._ENV !== 'production',
    validateStatus: function(status) {
      console.log('status: ', status)
      return status >= 200 && status < 300 // default
    }
  },
  proxy: {
    // 开启代理
    '/web': {
      target: 'http://lx.com'
      // pathRewrite: { '^/web/': '' }
    }
  },
  // proxy: [
  //   [
  //     '/web',//拦截目录
  //     {
  //       target: 'https://apitest.vaffle.com', // 代理api主机
  //       pathRewrite: { '^/web/' : '' }
  //     }
  //   ]
  // ],
  // proxyTable: {
  //   '/web': { target: 'http://127.0.0.1:8888', ws: false }
  // },

  /*
   ** Add server middleware
   ** Nuxt.js uses `connect` module as server
   ** So most of express middleware works with nuxt.js server middleware
   */
  // serverMiddleware: [
  //   // body-parser middleware
  //   bodyParser.json(),
  //   // session middleware
  //   session({
  //     secret: 'super-secret-key',
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: {
  //       maxAge: 60000
  //     }
  //   }),
  //   // Api middleware
  //   // We add /api/login & /api/logout routes
  //   '~/api'
  // ],

  /*
   ** Build configuration
   */
  build: {
    vendor: ['util'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        // const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
        // vueLoader.options.loaders.sass = 'vue-style-loader!css-loader!sass-loader'
      }
    },
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash].[ext]'
        }
      }
    ],
    styleResources: {
      scss: '~assets/scss/base.scss'
    },
    postcss: {
      plugins: {
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {}
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}
