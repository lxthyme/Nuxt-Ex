<template>
  <div class="v-avatar">
    <div class="v-avatar-logo">
      <img src="~/static/images/profile/avatar.png" alt>
    </div>
    <div class="v-profile">
      <span class="v-username">Pauline Harmon</span>
      <span class="v-timeline">8 hrs ago</span>
    </div>
  </div>
</template>

<style lang="scss">
.v-avatar {
  @include fit2(padding-top padding-bottom, 10px);
  @include fit2(padding-left padding-right, 16px);
  .v-avatar-logo {
    display: inline-block;
    @include fit2(width height, 40px);
    @include fit2(border-radius, 20px);
    background-color: $placeholderColor;
    img {
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
  }
}
</style>
