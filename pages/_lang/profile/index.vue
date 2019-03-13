<template>
  <div class="profile">
    <div class="profile-header">
      <div style="position: relative;">
        <img class="bg" src="~/static/images/profile/profile.png" alt>
        <div class="edit">
          <button>Edit Profile</button>
        </div>
        <div class="avatar">
          <img src="~/static/images/profile/avatar.png" alt>
        </div>
      </div>
      <div class="profile-content">
        <span class="uname">Bilal Ck</span>
        <span class="uinfo">
          <span class="ubold">373k</span> Followers
          <span class="ubold">299</span> Following
        </span>
      </div>
    </div>
    <div class="switch-bar">
      <span>Profile</span>
      <span class="active">32 Post</span>
      <span>Topics</span>
    </div>
    <div class="v-container">
      <div class="wrapper">
        <Post v-for="item in $store.getters['post/getPostList']" :key="item.key" :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import Post from '~/components/vf-post'

export default {
  layout: 'mobile',
  components: {
    Post
  }
}
</script>

<style lang="scss">
.profile {
  background-color: $placeholderColor;
  .profile-header {
    .bg {
      width: 100%;
    }
    .edit {
      position: absolute;
      right: 0;
      text-align: right;
      @include fit2(margin-top, 10px);
      @include fit2(margin-right, 16px);

      button {
        @include fit2(padding-top padding-bottom, 6px);
        @include fit2(padding-left padding-right, 10px);
        @include fit(13px);
        font-weight: bold;
        @include fit2(border-radius, 4px);
        // border: vw(1) solid #0094fe;
        border-style: solid;
        border-color: $brightBlueColor;
        @include fit2(border-width, 1px);
        color: $brightBlueColor;
        background-color: #fff;
      }
    }
    .avatar {
      position: absolute;
      display: inline-block;
      // max-width: pax(80);
      // max-height: pax(80);
      @include fit2(width, 80px);
      @include fit2(height, 80px);
      // bottom: -50%;
      // transform: translateY(-50%);
      // margin-top: vw(-40);
      @include fit2(left, 16px);
      @include fit2(border-width, 3px);
      border-style: solid;
      border-color: $whiteColor;
      @include fit2(border-radius, 40px);
      bottom: 0;
      transform: translateY(50%);

      img {
        width: 100%;
        height: 100%;
      }
    }
    .profile-content {
      @include fit2(margin-top, 40px);
      @include fit2(padding-top, 10px);
      @include fit2(padding-left padding-right padding-bottom, 16px);
      .uname {
        color: $blackColor;
        @include fit(20px);
        font-weight: bold;
        .uinfo {
          display: block;
          @include fit2(margin-top, 10px);
          color: $grayColor;
          @include fit(14px);
        }
        .ubold {
          color: $blackColor;
          font-weight: bold;
          span:nth-child(2) {
            @include fit2(margin-left, 16px);
          }
        }
      }
    }
  }
  .switch-bar {
    color: #818488;
    font-size: responsive pin(14) pax(14);
    border-bottom: vw(1) solid #d0d4d9;
    span {
      display: inline-block;
      padding: vw(10) 0;
      margin: 0 vw(24) 0 vw(16);
    }
    .active {
      color: #0094fe;
      border-bottom: vw(2) solid #0094fe;
    }
  }
}
</style>
