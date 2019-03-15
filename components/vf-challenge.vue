<template>
  <div v-if="item" class="v-challenge-s">
    <div class="v-item-post">
      <Avatar/>
      <div class="v-challenge">
        <img src="~/static/images/post/topic.png" alt>
        <span>7311 Macejkovic Mountain Suite 743</span>
      </div>
      <div class="v-content" @click="showPostDetail">
        <VPText :text="item.text" :links="item.links"/>
      </div>
      <Banner :id="item.key" :key="item.key" :data="item.images"/>
      <div class="v-content-achievement">
        <p>12.5k likes 15,065 comments</p>
      </div>
    </div>
    <ToolBox type="challenge" />
  </div>
</template>

<script>
import Banner from '~/components/vf-banner'
import VPText from '~/components/vf-slice'
import ToolBox from '~/components/vf-toolbox'
import Avatar from '~/components/vf-avatar'
import { mapMutations } from 'vuex'

export default {
  components: {
    Banner,
    VPText,
    ToolBox,
    Avatar
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(function() {
      this.$nuxt.$loading.start()
      this.__main()
    })
  },
  methods: {
    ...mapMutations({
      setShowMask: 'post/setShowMask',
      setPostDetail: 'post/setPostDetail'
    }),
    __main() {
      this.$nuxt.$loading.finish()
    },
    showPostDetail(e) {
      document.querySelector('show-text')
      if (e.target.nodeName !== 'LABEL' && e.target.nodeName !== 'A') {
        this.setPostDetail(this.item)
        this.setShowMask(true)
      }
    }
  }
}
</script>

<style lang="scss">
.v-challenge-s {
  @include fit2(padding-bottom, 20px);
  .v-item-post {
    @include fit2(border-radius, 4px);
    background-color: $whiteColor;
    .v-challenge {
      font-size: 0;
      @include fit2(padding-bottom, 8px);
      @include fit2(padding-left padding-right, 16px);
      img {
        @include fit2(width height, 22px);
        vertical-align: middle;
      }
      span {
        @include fit2(padding-left, 4px);
        @include fit(14px);
        color: $brownColor;
        vertical-align: middle;
      }
    }
    .v-content {
      @include fit2(padding-left padding-right, 16px);
      @include fit2(padding-bottom, 14px);
      @include fit(14px);
      color: $blackColor;
      line-height: 1.5;
      white-space: normal;
      .v-content-achievement {
        @include fit(13px);
        color: $blackColor;
        font-weight: bold;
        @include fit2(padding-left padding-right, 20px);
        @include fit2(padding-top padding-bottom, 12px);
      }
    }
  }
}
</style>
