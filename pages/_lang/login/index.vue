<template>
  <div class="container">
    <label class="login-title">Log In</label>
    <div><label class="login-error-tip">同意错误提示文本信息</label></div>
    <form v-if="!$store.state.authUser" @submit.prevent="login">
      <p v-if="formError" class="error">
        {{ formError }}
      </p>
      <div class="user-name-container">
        <input v-model="formUsername" type="text" name="username" placeholder="Email or Nickname">
      </div>
      <div class="user-pwd-container">
        <input v-model="formPassword" type="password" name="password" placeholder="Password">
      </div>
      <button class="login-submit" type="submit">Log in</button>
      <button class="forget-pwd" @click="forgetPasswordAction">Forgot your password</button>
      <div id="third-button-back" class="login-facebook" @click="facebookLoginAction">
        <img id="third-icon" src="~/static/images/login/facebook.png" alt="" srcset="">
        <div id="third-title">Facebook</div>
      </div>
      <div id="third-button-back" class="login-twitter" @click="twitterLoginAction">
        <img id="third-icon" src="~/static/images/login/twitter.png" alt="" srcset="">
        <span id="third-title">Twitter</span>
      </div>
      <div id="third-button-back" class="login-vk" @click="vkLoginAction">
        <img id="third-icon" src="~/static/images/login/vk.png" alt="" srcset="">
        <span id="third-title">VK</span>
      </div>
      <div id="third-button-back" class="login-ins" @click="instegrameLoginAction">
        <img id="third-icon" src="~/static/images/login/instagram.png" alt="" srcset="">
        <span id="third-title">Instagram</span>
      </div>
      <div id="third-button-back" class="login-google" @click="googleLoginAction">
        <img id="third-icon" src="~/static/images/login/google.png" alt="" srcset="">
        <span id="third-title">Google</span>
      </div>
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
          client_id: 'focal-grin-234502',
          cookiepolicy: 'single_host_origin',
          // 可以请求除了默认的'profile' and 'email'之外的数据
          scope: 'profile'
        })
      })
    }
    startApp()
    window.hello.init({
      instagram: 'ce6d9284ca32486299bd0e70e19ff106'
    })
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
      // const googleUser = {}
      // const basicprofile = googleUser.getBasicProfile().getName()
      // console.log('name: ' + basicprofile.getName())
      const profile = window.gapi.auth2.currentUser.get().getBasicProfile()
      console.log('profile: ' + profile)
      // console.log('ID: ' + profile.getId())
      // console.log('Full Name: ' + profile.getName())
      // console.log('Given Name: ' + profile.getGivenName())
      // console.log('Family Name: ' + profile.getFamilyName())
      // console.log('Image URL: ' + profile.getImageUrl())
      // console.log('Email: ' + profile.getEmail())
    },
    instegrameLoginAction() {
      window.hello('instagram').login(
        {
          redirect_uri: 'https://www.vaffle.com',
          scope: 'basic, publish'
        },
        function(e) {
          if (e.error) {
          } else {
            const instagramAccessToken = window
              .hello('instagram')
              .getAuthResponse().oauth_token
            const instagramSecret = window.hello('instagram').getAuthResponse()
              .oauth_token_secret
            console.log(instagramAccessToken)
            console.log(instagramSecret)
          }
        }
      )
    },
    forgetPasswordAction() {
      alert('忘记密码')
      this.$rounter.push({ name: 'lang-login-forget_password' })
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: white;
}
.container {
  @include fit2(padding, 16px);
  background-color: white;
  .login-title {
    @include fit2(margin-top, 45px);
    @include fit(24px);
    font-weight: bold;
    color: #2c2c2c;
  }
  .login-error-tip {
    @include fit(11px);
    @include fit2(margin-top, 4px);
    color: #ff2d55;
  }
  .user-name-container {
    @include fit2(margin-top, 0px);
    @include fit2(height, 38px);
    @include fit2(border-bottom-width, 1px);
    width: 100%;
    border-bottom-color: $lineColor;
    border-bottom-style: solid;
    line-height: 100%;
  }
  .user-pwd-container {
    @include fit2(margin-top, 15px);
    @include fit2(height, 38px);
    @include fit2(border-bottom-width, 1px);
    width: 100%;
    border-bottom-style: solid;
    border-bottom-color: $lineColor;
  }
  input {
    border: none;
    @include fit2(height, 35px);
    @include fit(14px);
    width: 100%;
    margin-top: 0px;
    align-items: center;
  }
  .login-submit {
    @include fit2(margin-top, 19px);
    @include fit2(height, 44px);
    @include fit2(border-radius, 4px);
    @include fit(14);
    background-color: #0094fe;
    color: white;
    border-radius: 4px;
    width: 100%;
  }
  .forget-pwd {
    @include fit2(margin-top, 10px);
    @include fit(12px);
    @include fit2(height, 26px);
    color: #0094fe;
    background-color: white;
    height: 26px;
    width: 100%;
  }
  .login-facebook {
    background-color: #4672cb;
  }
  .login-twitter {
    background-color: #1ca1f2;
  }
  .login-vk {
    background-color: #4a76a8;
  }
  .login-ins {
    background-color: #0d1117;
    color: white;
  }
  .login-google {
    background-color: #ffffff;
    @include fit2(border-width, 1px);
    border-style: solid;
    border-color: #dddddd;
  }
  #third-button-back {
    @include fit2(margin-top, 40px);
    @include fit2(height, 40px);
    @include fit2(border-radius, 4px);
    @include fit2(line-height, 40px);
    @include fit2(padding-top padding-bottom, 5px);
    @include fit2(padding-left padding-right, 0px);
    width: 100%;
    #third-icon {
      @include fit2(width, 30px);
      @include fit2(margin-left, 15px);
      height: auto;
      padding: 0px;
      font-size: 0px;
      vertical-align: middle;
      float: left;
    }
    #third-title {
      @include fit2(line-height, 30px);
      width: 80%;
      vertical-align: middle;
      padding: 0px;
      margin-left: 0px;
      float: left;
      text-align: center;
    }
  }
}
// .container {
//   padding: 16px;
//   background-color: white;
// }
// .login-title {
//   margin-top: 45px;
//   font-size: 24px;
//   font-weight: bold;
//   color: #2c2c2c;
// }
// .login-error-tip {
//   font-size: 11px;
//   margin-top: 4px;
//   color: #ff2d55;
// }
// .user-name-container {
//   margin-top: 0px;
//   width: 100%;
//   height: 38px;
//   border-bottom: 1px solid #e8e9ed;
//   line-height: 100%;
// }
// .user-pwd-container {
//   margin-top: 15px;
//   width: 100%;
//   height: 38px;
//   border-bottom: 1px solid #e8e9ed;
// }
// input {
//   border: none;
//   width: 100%;
//   height: 35px;
//   font-size: 14px;
//   color: #2c2c2c;
//   margin-top: 0px;
//   align-items: center;
// }
// .login-submit {
//   margin-top: 19px;
//   background-color: #0094fe;
//   color: white;
//   height: 44px;
//   border-radius: 4px;
//   width: 100%;
//   font-size: 14px;
// }
// .forget-pwd {
//   margin-top: 10px;
//   color: #0094fe;
//   font-size: 12px;
//   background-color: white;
//   height: 26px;
//   width: 100%;
// }
// .login-facebook {
//   margin-top: 40px;
//   height: 40px;
//   width: 100%;
//   background-color: #4672cb;
//   border-radius: 4px;
//   line-height: 40px;
// }
// .login-twitter {
//   margin-top: 40px;
//   height: 40px;
//   width: 100%;
//   background-color: #1ca1f2;
//   border-radius: 4px;
//   line-height: 40px;
// }
// .login-vk {
//   margin-top: 40px;
//   height: 40px;
//   width: 100%;
//   background-color: #4a76a8;
//   border-radius: 4px;
//   line-height: 40px;
// }
// .login-ins {
//   margin-top: 40px;
//   height: 40px;
//   width: 100%;
//   background-color: #0d1117;
//   border-radius: 4px;
//   line-height: 40px;
//   color: white;
// }
// .login-google {
//   margin-top: 40px;
//   height: 40px;
//   width: 100%;
//   background-color: #ffffff;
//   border-radius: 4px;
//   line-height: 40px;
//   border: solid 1px #dddddd;
// }
// #third-icon {
//   width: 30px;
//   height: auto;
//   margin-left: 15px;
//   padding: 0px;
//   font-size: 0px;
//   vertical-align: middle;
//   float: left;
// }
// #third-title {
//   width: 80%;
//   vertical-align: middle;
//   padding: 0px;
//   line-height: 30px;
//   margin-left: 0px;
//   float: left;
//   text-align: center;
// }
// #third-button-back {
//   padding: 5px 0px 5px 0px;
//   line-height: 40px;
// }
</style>
