<template>
  <div v-if="item && item.category === 'posts'" class="v-item-post-s">
    <div class="v-item-post">
      <Avatar :data="item.avatar"/>
      <div v-if="item.content.length > 0" class="v-content" @click="showPostDetail">
        <!-- TODO: links -->
        <VPText :text="item.content" :links="item.attention"/>
      </div>
      <Banner :id="item.key" :key="item.key" :data="item.images"/>
      <div class="v-content-achievement">
        <p>{{ item.praise_num}} likes {{ item.comments_num }} comments</p>
      </div>
    </div>
    <ToolBox :is_praise="item.is_praise" :is_collect="item.is_collect" />
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
.v-item-post-s {
  @include fit2(padding-bottom, 20px);
  .v-item-post {
    @include fit2(border-radius, 4px);
    background-color: $whiteColor;
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
