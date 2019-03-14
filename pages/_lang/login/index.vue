<template>
  <div class="container">
    <h1>Please login to see the secret content</h1>
    <form v-if="!$store.state.authUser" @submit.prevent="login">
      <p v-if="formError" class="error">
        {{ formError }}
      </p>
      <p>
        <i>To login, use
          <b>demo</b> as username and
          <b>demo</b> as password.
        </i>
      </p>
      <p>
        Username:
        <input v-model="formUsername" type="text" name="username">
      </p>
      <p>
        Password:
        <input v-model="formPassword" type="password" name="password">
      </p>
      <button type="submit">
        Login
      </button>
      
    </form>

    <form v-if="!$store.state.authUser" @submit.prevent="facebookLoginAction">
      <p v-if="formError" class="error">
        {{ formError }}
      </p>
      
      <button type="submit">
        Facebook
      </button>
      
    </form>
    <form v-if="!$store.state.authUser" @submit.prevent="twitterLoginAction">
      <p v-if="formError" class="error">
        {{ formError }}
      </p>
      <button type="submit">
        twitter
      </button>
    </form>
    <form v-if="!$store.state.authUser" @submit.prevent="vkLoginAction">
      <p v-if="formError" class="error">
        {{ formError }}
      </p>
      <button type="submit">
        VK
      </button>
    </form>
    <form v-if="!$store.state.authUser" @submit.prevent="googleLoginAction">
      <p v-if="formError" class="error">
        {{ formError }}
      </p>
      <button type="submit">
        Google
      </button>
    </form>


    <div v-else>
      Hello {{ $store.state.authUser.username }}!
      <pre>I am the secret content, I am shown only when the use is connected.</pre>
      <p>
        <i>You can also refresh this page, you'll still be connected!</i>
      </p>
      <button @click="logout">
        Logout
      </button>
    </div>
    <p>
      <nuxt-link :to="{name: 'lang-secret'}">
        Super secret page
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formError: null,
      formUsername: '',
      formPassword: '',
      fbToken: '',
      facebookSdkReady: false,
      twitterSdkReady: false
    }
  },
  mounted() {
    console.log('mounted')
    const vm = this

    const installFacebookSdkScript = (d, s, id) => {
      if (d.getElementById(id)) {
        this.facebookSdkReady = true
        return
      }
      const fjs = d.getElementsByTagName(s)[0]
      const js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }
    installFacebookSdkScript(document, 'script', 'facebook-jssdk')
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: 'fb1516783628365819',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
      })
      window.FB.getLoginStatus(function(response) {
        vm.statusChangeCallback(response)
      })
    }
    // twwitter 第三方登录
    const installTwritterSdkScript = (d, s, id) => {
      if (d.getElementById(id)) {
        this.twitterSdkReady = true
        return
      }
      const fjs = d.getElementsByTagName(s)[0]
      const js = d.createElement(s)
      js.id = id
      js.src = 'https://platform.twitter.com/widgets.js'
      fjs.parentNode.insertBefore(js, fjs)
    }
    installTwritterSdkScript(document, 'script', 'twitter-wjs')
    window.hello.init(
      { twitter: 'Wlbec4X5N1BZtPOuUjksVX6Gw' },
      { oauth_proxy: 'https://www.vaffle.com' }
    )
    window.VK.init({ apiId: '5987367' })
    const startApp = function() {
      window.gapi.load('auth2', function() {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        window.gapi.auth2.init({
          // 客户端ID
          client_id: '910367309122-35414qpalpuqbr3s93poslhqisqfhe4u.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          // 可以请求除了默认的'profile' and 'email'之外的数据
          scope: 'profile'
        })
      })
    }
    startApp()
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          uname: this.formUsername,
          upwd: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    },
    async facebookLogin() {
      try {
        await this.$store.dispatch('facebookLogin', {
          uname: this.formUsername,
          upwd: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
        this.facebookLoginAction()
      } catch (e) {
        this.formError = e.message
      }
    },
    facebookLoginAction() {
      const vm = this
      window.FB.login(
        function(response) {
          vm.statusChangeCallback(response)
        },
        {
          scope: 'publish_actions'
        }
      )
    },
    statusChangeCallback(response) {
      if (response.status === 'connected') {
        // 登陆状态已连接
        this.fbToken = response.authResponse.accessToken
        this.getUserInfo()
      } else if (response.status === 'not_authorized') {
        // 未经授权
        console.log('facebook未经授权')
      } else {
        console.log('不是登陆到Facebook;不知道是否授权')
      }
    },
    getUserInfo() {
      // 获取用户信息
      window.FB.api('/me', function(response) {
        // response.id/response.name
        console.log('Successful login for: ' + response.name)
        // 把用户token信息交给后台
        // self.location= '/home/login.fbLogin.do?accessToken='+fbToken;
      })
    },
    // twitter第三放登录
    twitterLoginAction() {
      this.login_twitter('twitter')
    },
    login_twitter(network) {
      const log = console.log
      // 登录方法，并将twitter 作为参数传入
      // Twitter instance
      const twitter = window.hello(network)
      // Login
      twitter
        .login()
        .then(function(r) {
          // Get Profile
          return twitter.api('/me')
        }, log)
        .then(function(p) {
          console.log('Connected to ' + network + ' as ' + p.name)
          const res = JSON.stringify(p)
          // 因为得不到token，但是这步已经得到用户所有信息，所以将用户信息转成JSON字符串给后台
          self.location = '/home/login.twLogin.do?result=' + res
          // 返回数据的地址
        }, log)
    },
    // vk第三放登录
    vkLoginAction() {
      window.VK.Auth.login(function(response) {
        if (response.session) {
          // 用户授权成功
          console.log(response)
          if (response.status === 'connected') {
            // 所选用户访问设置，如果他们被请求
          }
        } else {
          // 用户单击授权窗口中的取消按钮
        }
      })
    },
    googleLoginAction() {
      const googleUser = {}
      const basicprofile = googleUser.getBasicProfile()
      console.log('name: ' + basicprofile.getName())
      const profile = window.gapi.auth2.currentUser.get().getBasicProfile()
      console.log('ID: ' + profile.getId())
      console.log('Full Name: ' + profile.getName())
      console.log('Given Name: ' + profile.getGivenName())
      console.log('Family Name: ' + profile.getFamilyName())
      console.log('Image URL: ' + profile.getImageUrl())
      console.log('Email: ' + profile.getEmail())
    }
  }
}
</script>

<style>
.container {
  padding: 100px;
}
.error {
  color: red;
}
</style>
