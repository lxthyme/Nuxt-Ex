<template>
  <div style="margin-top: 20px;">
    <div class="v-item-post">
      <div class="v-avatar">
        <div class="v-avatar-logo">
          <img src alt>
        </div>
        <div class="v-profile">
          <span class="v-username">Pauline Harmon</span>
          <span class="v-timeline">8 hrs ago</span>
        </div>
      </div>
      <div class="v-content">
        <VPText :text="text"></VPText>
      </div>
      <Banner :data="$store.state.post.bannerList"></Banner>
      <div class="v-content-achievement">
        <p>12.5k likes 15,065 comments</p>
      </div>
      <div class="v-toolbox">
        <div class="v-line"></div>
        <!-- (div.v-toolbox-item>img)*4 -->
        <div class="v-toolbox-item">
          <img src="~/static/images/toolbox/like_red.png" alt>
        </div>
        <div class="v-toolbox-item">
          <img src="~/static/images/toolbox/comment.png" alt>
        </div>
        <div class="v-toolbox-item">
          <img src="~/static/images/toolbox/repost.png" alt>
        </div>
        <div class="v-toolbox-item">
          <img src="~/static/images/toolbox/collection.png" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '~/components/vf-banner'
import VPText from '~/components/vf-slice'
export default {
  components: {
    Banner,
    VPText
  },
  data() {
    return {
      text:
        'For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens. And to be sure, ' +
        'that is the exciting area of astronomy that accounts for it’s huge popularity. So to the uninitiated, the idea of “radio astronomy” seems strange. There are two reasons' +
        'for that. First is that humans are far more visual than audio oriented.'
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.$nuxt.$loading.start()
      this.__main()
    })
  },
  methods: {
    __main() {
      this.$nuxt.$loading.finish()
    },
    showMore(e) {
      console.log('E: ', e)
      if (e.currentTarget.previousElementSibling.classList.toggle('v-text')) {
        e.currentTarget.innerText = '收起'
        e.currentTarget.previousElementSibling.style['-webkit-box-orient'] =
          'vertical'
      } else {
        e.currentTarget.innerText = '更多'
      }
    }
  }
}
</script>

<style scoped>
.v-item-post {
  border-radius: 4px;
  background-color: #fff;
}

.v-avatar {
  padding: 10px 16px;
}
.v-avatar-logo,
.v-avatar-logo > img {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #d8d8d8;
}
.v-profile {
  display: inline-block;
  margin-left: 10px;
  vertical-align: top;
}
.v-username {
  display: block;
  color: #2c2c2c;
  font-size: 14px;
  font-weight: bold;
}
.v-timeline {
  display: block;
  color: #818488;
  font-size: 12px;
}
.v-content {
  padding: 0 16px 14px;
  font-size: 14px;
  color: #2c2c2c;
  line-height: 1.3;
  white-space: normal;
}
.v-slice,
.v-text {
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;

  display: -moz-box;
  -moz-box-orient: horizontal;

  display: -webkit-box;
  -webkit-box-orient: vertical;

  display: box;
  box-orient: horizontal;
}
.v-content-achievement {
  font-size: 13px;
  color: #2c2c2c;
  font-weight: bold;
  padding: 12px 20px;
}
.v-line {
  background-color: #e8e9ed;
  height: 1px;
  width: 100%;
  vertical-align: top;
}
.v-toolbox {
  height: 40px;
  padding: 0 20px;
  white-space: nowrap;
  vertical-align: top;
}
.v-toolbox-item {
  display: inline-block;
  vertical-align: top;
  width: 25%;
  height: 100%;
  text-align: center;
  line-height: 40px;
}
.v-toolbox-item > img {
  vertical-align: middle;
}
</style>
