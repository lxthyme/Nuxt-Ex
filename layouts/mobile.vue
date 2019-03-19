<template>
  <div>
    <div>
      <MobileNavigation/>
    </div>
    <div id="mobile-container">
      <div class="page">
        <div class="page-content pull-to-refresh-content infinite-scroll-content" data-ptr-distance="55">
          <div class="pull-to-refresh-layer">
            <div class="preloader"></div>
            <div class="pull-to-refresh-arrow"></div>
          </div>
          <div class="list-block app-container">
            <nuxt/>
          </div>
          <!-- <div class="preloader infinite-scroll-preloader"></div> -->
          <div class="ptr-preloader">
            <div class="preloader"></div>
            <div class="ptr-arrow"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MobileNavigation from '~/components/vf-mobile-navigation.vue'
import Framework7 from 'framework7'
export default {
  components: {
    MobileNavigation
  },
  mounted() {
    this.__main()
    // this.$nextTick(function() {
    // })
  },
  methods: {
    __main() {
      this.initInfiniteScroll()
    },
    initInfiniteScroll() {
      console.log('------>initInfiniteScroll')
      const app = new Framework7({
        // App root element
        root: '#app',
        // App Name
        name: 'My App',
        // App id
        id: 'com.myapp.test'
        // ... other parameters
      })
      window.app = app
      if (!app) {
      }
    }
  }
}
</script>

<style lang="css">
/* @import 'framework7/css/framework7.css'; */
@import 'framework7/css/framework7.bundle.css';
</style>
<!--
-->

<style lang="scss">
#mobile-container {
  .page {
    top: auto;
    // z-index: -1;
  }
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
