<template>
  <div class="v-item-news-s">
    <div class="v-item-news">
      <div class="v-news-content">
        <div class="left">
          <VFText :text="text" :links="[]"/>
        </div>
        <img class="logo" src="~/static/images/placeholder/reviews.png" alt>
      </div>
      <div class="v-news-bottom">
        <span>谷歌搜索</span>
        <span>26 阅读</span>
        <span class="time">1小时前</span>
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
  data() {
    return {
      text:
        'The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three… the most magnificent & awe inspiring. Bryce Canyon isn’t a canyon. it is the spectacular edge of the Paunsaugunt Plateau, a place where intricately carved towers & archways of stone shimmer in a dazzling array of colour under the bright sun. '
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
    background-color: $whiteColor;
    .v-news-content {
      @include fit2(padding-left padding-right, 16px);
      @include fit2(padding-top, 14px);
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
        display: inline-block;
        width: 30%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
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
