<template>
  <div v-if="item" style="padding-bottom: 5.333333333vw;">
    <div class="v-item-post">
      <Avatar />
      <div class="v-content" @click="showPostDetail">
        <VPText :text="item.text" :links="item.links" />
      </div>
      <Banner :id="item.key" :key="item.key" :data="item.images" />
      <div class="v-content-achievement">
        <p>12.5k likes 15,065 comments</p>
      </div>
    </div>
    <ToolBox />
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

<style scoped>
.v-item-post {
  border-radius: 1.066666667vw;
  background-color: #fff;
}
.v-content {
  padding: 0 4.266666667vw 3.733333333vw;
  font-size: 3.733333333;
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
  font-size: 3.466666667vw;
  color: #2c2c2c;
  font-weight: bold;
  padding: 3.2vw 5.333333333vw;
}
</style>
