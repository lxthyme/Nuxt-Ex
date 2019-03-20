<template>
  <div>
    <!-- <MobileNavigation/> -->
    <!-- <div id="minirefresh" class="mescroll"> -->
    <div id="minirefresh" class="mescroll">
      <div>
        <div id="mobile-container">
          <!-- <nuxt :keep-alive="isKeepAlive"/> -->
          <!-- <div v-if="isKeepAlive" class="app-container v-keep-alive">
            <nuxt keep-alive/>
          </div>
          <div v-else class="app-container">
            <nuxt/>
          </div> -->
          <div class="app-container">
            <nuxt/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import MobileNavigation from '~/components/vf-mobile-navigation.vue'
// import 'minirefresh/dist/minirefresh.min.css'
import MeScroll from 'mescroll.js'
export default {
  components: {
    // MobileNavigation
  },
  data() {
    return {
      keepAlivePages: ['/profile/', '/profile/post', '/profile/reviews']
    }
  },
  computed: {
    isKeepAlive() {
      const isKeepAlive = this.keepAlivePages.indexOf(this.$route.path) > -1
      console.log('--->isKeepAlive: ', isKeepAlive)
      return isKeepAlive
    }
  },
  mounted() {
    this.__main()
    // this.$nextTick(function() {
    // })
  },
  methods: {
    __main() {
      this.initInfiniteScroll()

      // document.body.addEventListener(
      //   'touchmove',
      //   function(e) {
      //     // 阻止默认的处理方式(阻止下拉滑动的效果)
      //     e.preventDefault()
      //   },
      //   {
      //     passive: false
      //   }
      // ) // passive 参数不能省略，用来兼容ios和android
      // document.getElementsByTagName('body')[0].addEventListener(
      //   'touchstart',
      //   function(e) {
      //     e.preventDefault()
      //   },
      //   {
      //     passive: false
      //   }
      // )
    },
    initInfiniteScroll() {
      const me = this
      me.mescroll = new MeScroll('minirefresh', {
        down: {
          auto: false
        },
        up: {
          auto: false,
          callback: me.loadPostData,
          page: {
            num: 0,
            size: 10
          },
          isBounce: true
        }
      })
      window.mescroll = me.mescroll
    }
  }
}
</script>

<!--
-->
<style>
/* @import 'minirefresh/dist/minirefresh.min.css'; */
@import 'mescroll.js/mescroll.min.css';
</style>

<style lang="scss">
#mobile-container {
  .page {
    top: auto;
    // z-index: -1;
  }
}
/* #minirefresh {
  @include fit2(padding-top, 46px);
} */
.mescroll {
  position: fixed;
  // @include fit2(top, 46px);
  top: 44px;
  bottom: 0;
  height: auto; /*如设置bottom:50px,则需height:auto才能生效*/
}
</style>


<style scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
* {
  /* -webkit-touch-callout:none; */
  /* -webkit-user-select:none; */
  /* -webkit-tap-highlight-color:transparent; */
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

<style lang="scss">
body {
  background-color: $placeholderColor;
}
// body,
// html {
//   position: fixed;
//   // height: calc(100% + 10px);
//   height: 100%;
//   width: 100%;
//   // overflow-y: scroll;
// }
// html,
// body {
//   height: 100%;
//   width: 100%;
//   overflow: auto;
// }

html,
body {
  height: 100%;
  padding: 0;
  overflow: auto;
  margin: 0;
  -webkit-overflow-scrolling: touch;
}
.app-container {
  margin: 0 auto;
  max-width: 660px;
  min-width: 320px;
  min-height: 480px;
  @extend %v-mask;
}
body,
#__nuxt,
#__layout,
.app-container {
  min-height: 100%;
}
</style>
