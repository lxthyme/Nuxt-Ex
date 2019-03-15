<template>
  <div class="d-followers">
    <div class="header">
      <div class="item">
        <!-- <span class="active">Followers</span> -->
        <nuxt-link
          :to="{name: 'lang-follow'}"
          tag="span"
          :class="{active: !$route.path.includes('following')}"
          replace
        >Followers</nuxt-link>
      </div>
      <div class="item">
        <!-- <span>Following</span> -->
        <nuxt-link
          :to="{name: 'lang-follow-following'}"
          tag="span"
          :class="{active: $route.path.includes('following')}"
          replace
        >Following</nuxt-link>
      </div>
    </div>
    <div class="v-container">
      <div class="wrapper">
        <nuxt-child/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'mobile',
  mounted() {
    this.$nextTick(function() {
      this.$nuxt.$loading.finish()
      //   this.__main()
    })
  }
}
</script>

<style lang="scss">
.d-followers {
  background-color: #fff;
  .header {
    font-size: 0;
    @extend %v-mask;
  }
  .item {
    @include fit(14px);
    display: inline-block;
    width: 50%;
    color: $brightBlueColor;
    font-weight: bold;
    text-align: center;
    .active {
      @extend %v-blue-line;
    }
    span {
      @include fit2(padding-top, 9px);
      @include fit2(padding-bottom, 7px);
      display: inline-block;
    }
  }
}
</style>
