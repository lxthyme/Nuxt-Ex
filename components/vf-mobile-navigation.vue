<template>
  <div class="v-mobile-navigation">
    <img src="~/static/images/toolbox/back.png" @click="goback">
    <span>Bilal Ck</span>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(function() {
      //   this.__main()
      console.log('Route', this)
    })
  },
  methods: {
    goback() {
      console.log('Route2', this)
      this.$router.back()
    }
  }
}
</script>

<style lang="scss">
.v-mobile-navigation {
  @include fit2(padding-top, 16px);
  @include fit2(padding-bottom, 14px);
  @include fit2(height, 46px);
  @extend %v-shadow;
  position: relative;
  font-size: 0;
  background-color: #fff;
  @extend %v-shadow;
  text-align: center;
  z-index: 990;
  img {
    @include fit2(left, 14px);
    @include fit2(width height, 24px);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  span {
    @include fit(16px);
    @include fit2(padding-left padding-right, 16px);
    color: $blackColor;
    display: inline-block;
    vertical-align: middle;
    width: 100%;
  }
}
</style>
