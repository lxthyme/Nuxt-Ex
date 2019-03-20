<template>
  <div class="profile">
    <div v-if="!$route.path.includes('edit')" class="profile-content">
      <div class="profile-header">
        <div style="position: relative;">
          <img class="bg" :src="data.cover_path" alt>
          <div class="edit">
            <!-- <button>Edit Profile</button> -->
            <nuxt-link :to="{name: 'lang-profile-edit'}" tag="button">
              Edit Profile
            </nuxt-link>
          </div>
          <div class="avatar">
            <img :src="data && data.avatar && data.avatar.path_format" alt>
          </div>
        </div>
        <div class="profile-content">
          <span class="uname">
            {{ data && data.nickname }}
            <img v-for="(item, idx) in data.member_name.icon" :key="idx" :src="item" alt>
          </span>
          <span class="uinfo">
            <!-- <span class="ubold">373k</span> Followers -->
            <nuxt-link :to="{name: 'lang-follow'}" tag="span">
              <span class="ubold">{{ data && data.followers }}</span> Followers
            </nuxt-link>
            <!-- <span class="ubold">299</span> Following -->
            <nuxt-link :to="{name: 'lang-follow-following'}" tag="span">
              <span class="ubold">{{ data && data.following }}</span> Following
            </nuxt-link>
          </span>
        </div>
      </div>
      <div class="switch-bar-placeholder">
        <div class="switch-bar">
          <nuxt-link
            :to="{name: 'lang-profile'}"
            tag="span"
            :class="{active: (!$route.path.includes('post') && !$route.path.includes('reviews'))}"
          >
            Profile
          </nuxt-link>
          <nuxt-link
            :to="{name: 'lang-profile-post', query: {page: $store.state.center.dpost.params.page}, params: {keep: true}}"
            tag="span"
            :class="{active: $route.path.includes('post')}"
          >
            {{ data.posts_num }} Post
          </nuxt-link>
          <nuxt-link
            :to="{name: 'lang-profile-reviews'}"
            tag="span"
            :class="{active: $route.path.includes('reviews')}"
          >
            {{ data.review_num }} Reviews
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="v-container">
      <div class="wrapper">
        <!-- <nuxt-child :keep-alive="isKeepAlive" /> -->
        <!-- <nuxt-child /> -->
        <!-- <keep-alive>
        </keep-alive> -->
        <div v-if="$route.path.includes('post')">
          <keep-alive>
            <Post />
          </keep-alive>
        </div>
        <div v-else-if="$route.path.includes('reviews')">
          <keep-alive>
            <Reviews />
          </keep-alive>
        </div>
        <div v-else>
          <keep-alive>
            <Index />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Reviews from '~/pages/_lang/profile/reviews'
import Post from '~/pages/_lang/profile/post'
import Index from '~/pages/_lang/profile/index'
export default {
  layout: 'mobile',
  components: {
    Index,
    Post,
    Reviews
  },
  data() {
    return {
      offsetTop: 0
    }
  },
  async fetch({ query, store }) {
    if (store.state.center.dcenter.cache) {
      return
    }
    const params = {
      member_id: 959
    }
    await store.dispatch('center/memberCenter', params)
  },
  computed: {
    ...mapGetters({
      data: 'center/formatCenter'
    }),
    // ...mapMutations({
    //   resetPageData: 'center/resetPageData'
    // }),
    isKeepAlive() {
      const isKeepAlive = this.$route.path.indexOf('profile') > -1
      return isKeepAlive
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.$store.commit('center/setCenterCache', true)
      this.__main()
    })
  },
  methods: {
    __main() {
      const me = this
      const ele = document.getElementsByClassName('switch-bar')[0]
      const ph = document.getElementsByClassName('switch-bar-placeholder')[0]
      document.addEventListener('scroll', function() {
        const o = ele.offsetTop
        const c = document.documentElement.scrollTop
        if (me.offsetTop === 0 && c >= o) {
          me.offsetTop = c
          ele.classList.add('v-fixed')
          ph.style.height = '' + ele.offsetHeight + 'px'
        } else if (me.offsetTop > 0 && c <= me.offsetTop) {
          me.offsetTop = 0
          ele.classList.remove('v-fixed')
          // ph.style.height = ''
        }
      })
    }
  }
}
</script>

<style lang="scss">
.profile {
  .profile-content {
    background-color: $whiteColor;
    height: 100%;
    .profile-header {
      .bg {
        @include fit2(height, 150px);
        width: 100%;
        object-fit: cover;
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
        @include fit2(border-radius, 40px);
        // bottom: -50%;
        // transform: translateY(-50%);
        // margin-top: vw(-40);
        @include fit2(left, 16px);
        @include fit2(border-width, 3px);
        border-style: solid;
        border-color: $whiteColor;
        bottom: 0;
        transform: translateY(50%);

        img {
          @include fit2(border-radius, 40px);
          background-color: $placeholderColor;
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
          img {
            @include fit2(width height, 20px);
          }
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
    .v-fixed {
      position: fixed;
      z-index: 999;
      top: 0;
      background-color: #fff;
      width: 100%;
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
}
</style>
