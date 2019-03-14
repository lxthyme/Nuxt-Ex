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
      <nuxt-link :to="{name: 'lang-profile'}" tag="span">Profile</nuxt-link>
      <nuxt-link :to="{name: 'lang-profile-post'}" tag="span">32 Post</nuxt-link>
      <nuxt-link :to="{name: 'lang-profile-reviews'}" tag="span">Reviews</nuxt-link>
    </div>
    <div class="v-container">
      <div class="wrapper">
        <div v-if="0 === 1">
          <Post v-for="item in $store.getters['post/getPostList']" :key="item.key" :item="item"/>
        </div>
        <!-- <Profile /> -->
        <!-- <nuxt-child /> -->
        <NuxtChild />
      </div>
    </div>
  </div>
</template>

<script>
import Post from '~/components/vf-post'
// import Profile from '~/components/vf-profile'

export default {
  layout: 'mobile',
  components: {
    Post
    // Profile
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
      }
      .uinfo {
        display: block;
        @include fit2(margin-top, 10px);
        color: $grayColor;
        @include fit(14px);
        .ubold {
          color: $blackColor;
          font-weight: bold;
        }
        span:nth-child(2) {
          @include fit2(margin-left, 16px);
        }
      }
    }
  }
  .switch-bar {
    color: #818488;
    @include fit(14px);
    @include fit2(border-bottom-width, 1px);
    border-bottom-color: $lineColor;
    border-bottom-style: solid;
    span {
      display: inline-block;
      @include fit2(padding-top padding-bottom, 10px);
      @include fit2(margin-right, 24px);
      @include fit2(margin-left, 16px);
    }
    .active {
      color: #0094fe;
      @include fit2(border-bottom-width, 2px);
      border-bottom-color: $brightBlueColor;
      border-bottom-style: solid;
    }
  }
}
</style>
