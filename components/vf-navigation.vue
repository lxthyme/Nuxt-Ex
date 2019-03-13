<template>
  <div class="v-navigation v-shadow">
    <div class="v-navigation-container">
      <img class="v-logo" src="~static/images/logo.jpg" alt>
      <input id class="v-search" type="search" name>
      <img class="v-logo-text" src="~static/images/vaffle-logo.png" alt>
    </div>
  </div>
</template>

<style scoped>
.v-navigation {
  position: fixed;
  top: 0;
  z-index: 998;
  width: 100%;
  width: 100%;
  height: 56px;
  background-color: #fff;
  text-align: center;
}
.v-navigation-container {
  display: inline-block;
  width: 1000px;
  height: 100%;
  text-align: left;
}
.v-logo {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-top: 8px;
  border-radius: 20px;
}
.v-search {
  display: inline-block;
  width: 255px;
  height: 30px;
  margin: 13px 0 0 25px;
  border-radius: 4px;
  vertical-align: top;
  background-color: #eff0f2;
  border: 1px solid #e8e9ed;
}
.v-logo-text {
  display: inline-block;
  vertical-align: top;
  margin: 19px 0 0 146px;
  height: 18px;
}
</style>
