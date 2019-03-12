<template>
  <div class="v-switch">
    <nuxt-link
      :to="{name: 'lang', params: {type: 'following'}}"
      tag="button"
      :class="{active: type === 'following'}"
      exact
    >Following
      <div class="active-bar" v-if="type === 'following'"></div>
    </nuxt-link>
    <nuxt-link
      :to="{name: 'lang-main-type', params: {type: 'post'}}"
      tag="button"
      :class="{active: type === 'post'}"
      exact
    >Post
      <div class="active-bar" v-if="type === 'post'"></div>
    </nuxt-link>
    <nuxt-link
      :to="{name: 'lang-main-type', params: {type: 'news'}}"
      tag="button"
      :class="{active: type === 'news'}"
      exact
    >News
      <div class="active-bar" v-if="type === 'news'"></div>
    </nuxt-link>
    <nuxt-link
      :to="{name: 'lang-main-type', params: {type: 'qa'}}"
      tag="button"
      :class="{active: type === 'qa'}"
      exact
    >Q/A
      <div class="active-bar" v-if="type === 'qa'"></div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    type: String
  }
}
</script>

<style scoped>
.v-switch {
  position: relative;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 2px 2px 15px #e8e9ed;
}

.v-switch > button {
  display: inline-block;
  position: relative;
  margin: 0 20px;
  line-height: 40px;
  text-align: center;
  color: #818488;
  font-size: 14px;
  font-weight: bold;
  border: none;
  outline: none;
}
.v-switch > button:hover,
.active {
  color: #0094fe !important;
  font-size: 14px !important;
  font-weight: bold !important;
}
.active-bar {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 2px;
  background-color: #0094fe;
  left: 0;
  bottom: 0;
}
</style>
