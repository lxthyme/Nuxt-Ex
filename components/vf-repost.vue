<template>
  <div v-if="item" class="v-item-repost-s">
    <div class="repost-avatar">
      <Avatar :data="item.origin_avatar"/>
      <div v-if="item.content && item.content.length > 0" class="v-content" @click="showPostDetail">
        <VPText :text="item.content" :links="item.attention" />
      </div>
    </div>
    <div class="v-item-repost">
      <Avatar :data="item.avatar"/>
      <div v-if="item.origin_content && item.origin_content.length > 0" class="v-content" @click="showPostDetail">
        <VPText :text="item.origin_content" :links="item.origin_attention" />
      </div>
      <div class="v-repost-banner">
        <Banner :id="item.key" :key="item.key" :data="item.images"/>
      </div>
    </div>
    <div class="v-content-achievement">
      <p>
        <span v-if="item.praise_num > 0">
          {{ item.praise_num }} {{ item.praise_num === 1 ? 'like' : 'likes' }}
        </span>
        <span v-if="item.comments_num > 0">
          {{ item.comments_num }} {{ item.comments_num === 1 ? 'comment': 'comments' }}
        </span>
      </p>
    </div>
    <ToolBox type="challenge" :isPraise="item.origin_is_praise" :isCollect="item.origin_is_collect" />
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
    .v-content {
      @include fit2(padding-left padding-right, 16px);
      @include fit2(padding-bottom, 14px);
      @include fit(14px);
      color: $blackColor;
      line-height: 1.5;
      white-space: normal;
    }
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
    .v-repost-banner {
      @include fit2(padding-left padding-right, 16px);
    }
  }
  .v-content-achievement {
    @include fit(13px);
    background-color: $whiteColor;
    color: $blackColor;
    font-weight: bold;
    @include fit2(padding-left padding-right, 20px);
    @include fit2(padding-top padding-bottom, 12px);
  }
}
</style>
