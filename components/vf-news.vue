<template>
  <div class="v-item-news-s">
    <div class="v-item-news">
      <div v-if="data.images.length > 0" class="v-news-content">
        <div class="left">
          <VFText :text="data.title" :links="[]"/>
        </div>
        <img class="logo" :src="data.images[0].path_format" alt>
      </div>
      <div v-else class="v-news-content" style="min-height: 0;">
        <div class="left">
          <VFText :text="data.title" :links="[]"/>
        </div>
      </div>
      <div class="v-news-bottom">
        <span>{{ data.from }}</span>
        <span>{{ data.read_num }} 阅读</span>
        <span class="time">{{ $momentShow(data.created_at) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import VFText from '~/components/vf-slice'
export default {
  components: {
    VFText
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {
        return {}
      }
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
    }
  }
}
</script>

<style lang="scss">
.v-item-news-s {
  @include fit2(margin-bottom, 20px);
  font-size: 0;
  .v-item-news {
    @include fit2(border-radius, 4px);
    @include fit2(padding-top, 14px);
    background-color: $whiteColor;
    .v-news-content {
      @include fit2(padding-left padding-right, 16px);
      @include fit2(min-height, 84px);
      @include fit(14px);
      color: $blackColor;
      position: relative;
      line-height: 1.3;
      white-space: normal;
      font-size: 0;
      .left {
        display: inline-block;
        width: 70%;
      }
      .logo {
        @include fit2(width height, 84px);
        @include fit2(right, 16px);
        @include fit2(border-radius, 2px);
        display: inline-block;
        width: 30%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: $placeholderColor;
      }
    }
    .v-news-bottom {
      @include fit2(padding-top, 12px);
      @include fit2(padding-left padding-right, 16px);
      @include fit2(padding-bottom, 10px);
      font-size: 0;
      span,
      .time {
        @include fit(12px);
        color: $grayColor;
      }
      span:nth-child(2) {
        @include fit2(padding-left, 16px);
      }
      .time {
        float: right;
      }
    }
  }
}
</style>
