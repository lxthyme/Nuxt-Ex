<template>
  <div class="v-avatar">
    <div class="v-avatar-logo">
      <img :src="data && data.path_format" alt>
    </div>
    <div class="v-profile">
      <span class="v-username">{{ data && data.f_displayname }}</span>
      <span class="v-timeline">{{ data && data.f_created_at && $momentShow(data.f_created_at) }}</span>
      <button v-if="$route.fullPath.indexOf('profile/post') < 0" :class="{'unfollow': data && data.f_is_follow}">Follow</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.v-avatar {
  @include fit2(padding-top padding-bottom, 10px);
  @include fit2(padding-left padding-right, 16px);
  position: relative;
  .v-avatar-logo {
    display: inline-block;
    @include fit2(width height, 40px);
    @include fit2(border-radius, 20px);
    background-color: $placeholderColor;
    img {
      @include fit2(border-radius, 20px);
      width: 100%;
      height: 100%;
    }
  }
  .v-profile {
    display: inline-block;
    @include fit2(margin-top, 5px);
    @include fit2(margin-left, 10px);
    vertical-align: top;
    .v-username {
      display: block;
      color: $blackColor;
      @include fit(14px);
      font-weight: bold;
    }
    .v-timeline {
      display: block;
      color: $grayColor;
      @include fit(12px);
    }
    button {
      @include fit(12px);
      @include fit2(right, 16px);
      @include fit2(border-radius, 4px);
      @include fit2(padding-top padding-bottom, 7px);
      @include fit2(padding-left padding-right, 12px);
      background-color: $brightBlueColor;
      color: $whiteColor;
      font-weight: bold;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: auto;
    }
  }
}
</style>
