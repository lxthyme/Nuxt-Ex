<template>
  <div v-if="item" class="v-item-repost-s">
    <div class="repost-avatar">
      <Avatar/>
    </div>
    <div class="v-item-repost">
      <Avatar/>
      <div class="v-content" @click="showPostDetail">
        <VPText :text="item.text" :links="item.links"/>
      </div>
      <Banner :id="item.key" :key="item.key" :data="item.images"/>
      <div class="v-content-achievement">
        <p>12.5k likes 15,065 comments</p>
      </div>
    </div>
    <ToolBox type="challenge"/>
  </div>
</template>

<script>
import Avatar from '~/components/vf-avatar'
import VPText from '~/components/vf-slice'
import ToolBox from '~/components/vf-toolbox'
import Banner from '~/components/vf-banner'
export default {
  components: {
    VPText,
    ToolBox,
    Avatar,
    Banner
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
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
.v-item-repost-s {
  @include fit2(padding-bottom, 20px);
  .repost-avatar {
    background-color: $whiteColor;
  }
  .v-item-repost {
    @include fit2(border-radius, 4px);
    background-color: $placeholderColor;
    .v-content {
      @include fit2(padding-left padding-right, 16px);
      @include fit2(padding-bottom, 14px);
      @include fit(14px);
      color: $blackColor;
      line-height: 1.5;
      white-space: normal;
    }
    .v-content-achievement {
      @include fit(13px);
      color: $blackColor;
      font-weight: bold;
      @include fit2(padding-left padding-right, 20px);
      @include fit2(padding-top padding-bottom, 12px);
    }
  }
}
</style>
