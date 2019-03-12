<template>
  <div>
    <Navigation></Navigation>
    <div class="app-container">
      <div style="white-space: nowrap;">
        <div class="panel-left">
          <MainHeader :type="$route.params.type || 'following'"></MainHeader>
          <div class="app-content">
            <nuxt/>
          </div>
        </div>
        <div class="panel-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/vf-navigation'
import MainHeader from '~/components/vf-main-header'
export default {
  components: {
    Navigation,
    MainHeader
  }
}
</script>

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
  background-color: #fff;
  vertical-align: top;
}
</style>
