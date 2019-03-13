<template>
  <div class="v-switch v-shadow">
    <nuxt-link
      :to="{name: 'lang', params: {type: 'following'}}"
      tag="button"
      :class="{active: type === 'following'}"
      exact
    >
      Following
      <div v-if="type === 'following'" class="active-bar" />
    </nuxt-link>
    <nuxt-link
      :to="{name: 'lang-main-type', params: {type: 'post'}}"
      tag="button"
      :class="{active: type === 'post'}"
      exact
    >
      Post
      <div v-if="type === 'post'" class="active-bar" />
    </nuxt-link>
    <nuxt-link
      :to="{name: 'lang-main-type', params: {type: 'news'}}"
      tag="button"
      :class="{active: type === 'news'}"
      exact
    >
      News
      <div v-if="type === 'news'" class="active-bar" />
    </nuxt-link>
    <nuxt-link
      :to="{name: 'lang-main-type', params: {type: 'qa'}}"
      tag="button"
      :class="{active: type === 'qa'}"
      exact
    >
      Q/A
      <div v-if="type === 'qa'" class="active-bar" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.v-switch {
  position: relative;
  background-color: #fff;
  border-radius: 2px;
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
