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
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
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
  plugins: [{
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
    browserBaseURL: process.env._ENV === 'production' ?
      'https://api.vaffle.com' : 'https://login.vk.com',
    // baseURL: process.env._ENV == 'production' ? 'https://api.vaffle.com' : 'https://apitest3.vaffle.com',
    // prefix: '/233',
    // withCredentials: true,
    timeout: 60000,
    proxy: process.env._ENV !== 'production',
    validateStatus: function (status) {
      console.log('status: ', status)
      return status >= 200 && status < 300 // default
    }
  },
  // proxy: {
  //   // 开启代理
  //   '/api': {
  //     target: 'http://172.0.0.1:3041'
  //     // pathRewrite: { '^/api/': '' }
  //   }
  // },
  proxy: {
    // 开启代理
    '/api': {
      target: 'http://172.0.0.1:3041'
      // pathRewrite: { '^/api/': '' }
    },
    '/api/login': {
      target: 'https://login.vk.com',
      changeOrigin: true,
      pathRewrite: { '^/api/login': '' }
    }
  },
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
    loaders: [{
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'img/[name].[hash].[ext]'
      }
    }],
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
