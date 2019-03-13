<template>
  <div style="height: 2000px;">
    <div style="position: relative;">
      <Navigation />
      <div class="app-container">
        <div style="white-space: nowrap;">
          <div class="panel-left">
            <MainHeader :type="$route.params.type || 'following'" />
            <div class="app-content">
              <nuxt />
            </div>
          </div>
          <div class="panel-right">
            <PanelLeft />
          </div>
        </div>
      </div>
      <!-- <div id="v-mask" v-if="showMask" @click="maskAction()">
        <PostAlert :item="$store.state.post.postList[0]"></PostAlert>
      </div>-->
    </div>
    <div id="v-mask" @click="maskAction">
      <PostAlert :key="$store.state.post.detailKey" :item="$store.state.post.postDetail" />
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/vf-navigation'
import MainHeader from '~/components/vf-main-header'
import PanelLeft from '~/components/vf-panel-left'
import PostAlert from '~/components/vf-post-alert'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    Navigation,
    MainHeader,
    PanelLeft,
    PostAlert
  },
  data() {
    return {
      scrollTop: 0
    }
  },
  computed: {
    ...mapState({
      showMask: state => state.post.showMask
    })
  },
  watch: {
    showMask(v) {
      if (v) {
        // 显示
        document.getElementById('v-mask').style.display = 'block'
        this.afterOpen()
      } else {
        // 隐藏
        this.beforeClose()
        document.getElementById('v-mask').style.display = 'none'
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      if (this.showMask) {
        document.getElementById('v-mask').style.display = 'block'
        this.afterOpen()
      }
      this.__main()
    })
  },
  methods: {
    ...mapMutations({
      setShowMask: 'post/setShowMask'
    }),
    __main() {},
    maskAction(e) {
      if (e.target.innerHTML.search('v-wrapper') >= 0) {
        this.setShowMask(!this.showMask)
      }
    },
    afterOpen: function(bodyCls) {
      this.scrollTop = document.scrollingElement.scrollTop
      document.body.classList.add('modal-open')
      document.body.style.top = -this.scrollTop + 'px'
    },
    beforeClose: function(bodyCls) {
      document.body.classList.remove('modal-open')
      // scrollTop lost after set position:fixed, restore it back.
      document.scrollingElement.scrollTop = this.scrollTop
    }
  }
}
</script>

<style>
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

body {
  background-color: #eff0f2;
}
.app-container {
  margin: 76px auto 0;
  width: 1000px;
  height: 2000px;
}
.panel-left {
  display: inline-block;
  width: 660px;
  vertical-align: top;
}
.panel-right {
  display: inline-block;
  width: 320px;
  margin-left: 20px;
  height: 1000px;
  /* background-color: #fff; */
  vertical-align: top;
}
#v-mask {
  display: none;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 25, 0.3);
}
body.modal-open {
  position: fixed;
  width: 100%;
}
</style>
