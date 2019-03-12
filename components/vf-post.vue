<template>
  <div style="margin-top: 20px;" v-if="item">
    <div class="v-item-post">
      <Avatar></Avatar>
      <div class="v-content" @click="showPostDetail">
        <VPText :text="item.text" :links="item.links"></VPText>
      </div>
      <Banner :id="item.key" :data="item.images" :key="item.key"></Banner>
      <div class="v-content-achievement">
        <p>12.5k likes 15,065 comments</p>
      </div>
    </div>
    <ToolBox></ToolBox>
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
    item: Object
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

<style scoped>
.v-item-post {
  border-radius: 4px;
  background-color: #fff;
}
.v-content {
  padding: 0 16px 14px;
  font-size: 14px;
  color: #2c2c2c;
  line-height: 1.5;
  white-space: normal;
}
/* .v-slice,
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
} */
.v-content-achievement {
  font-size: 13px;
  color: #2c2c2c;
  font-weight: bold;
  padding: 12px 20px;
}
</style>
