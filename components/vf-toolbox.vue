<template>
  <div class="v-toolbox">
    <div class="v-line"/>
    <!-- (div.v-toolbox-item>img)*4 -->
    <div v-if="type === 'review' || type === 'news'">
      <div class="v-toolbox-item w-half">
        <img v-if="is_praise === 1" src="~/static/images/toolbox/like_red.png" alt>
        <img v-else src="~/static/images/toolbox/like_grey.png" alt>
      </div>
      <div class="v-toolbox-item w-half">
        <img src="~/static/images/toolbox/comment.png" alt>
      </div>
    </div>
    <div v-else-if="type === 'challenge' || type === 'repost'">
      <div class="v-toolbox-item w-third">
        <img v-if="is_praise === 1" src="~/static/images/toolbox/like_red.png" alt>
        <img v-else src="~/static/images/toolbox/like_grey.png" alt>
      </div>
      <div class="v-toolbox-item w-third">
        <img src="~/static/images/toolbox/comment.png" alt>
      </div>
      <div class="v-toolbox-item w-third">
        <img v-if="is_collect === 1" src="~/static/images/toolbox/collection_grey.png" alt>
        <img v-else src="~/static/images/toolbox/collection.png" alt>
      </div>
    </div>
    <div v-else>
      <div class="v-toolbox-item w-quarter">
        <img v-if="is_praise === 1" src="~/static/images/toolbox/like_red.png" alt>
        <img v-else src="~/static/images/toolbox/like_grey.png" alt>
      </div>
      <div class="v-toolbox-item w-quarter">
        <img src="~/static/images/toolbox/comment.png" alt>
      </div>
      <div class="v-toolbox-item w-quarter">
        <img src="~/static/images/toolbox/repost.png" alt>
      </div>
      <div class="v-toolbox-item w-quarter">
        <img v-if="is_collect === 1" src="~/static/images/toolbox/collection_grey.png" alt>
        <img v-else src="~/static/images/toolbox/collection.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Post: 喜欢 评论 转发 收藏
    // Challenge/repost: 喜欢 评论 收藏
    // Review/News: 喜欢 评论
    type: {
      type: String,
      required: false,
      default: () => {
        return 'post'
      }
    },
    is_praise: {
      type: Number,
      required: false,
      default: () => {
        return 0
      }
    },
    is_collect: {
      type: Number,
      required: false,
      default: () => {
        return 0
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.__main()
    })
  },
  methods: {
    __main() {}
  }
}
</script>

<style lang="scss">
.v-toolbox {
  @include fit2(height, 40px);
  @include fit2(padding-left padding-right, 20px);
  white-space: nowrap;
  vertical-align: top;
  background-color: $whiteColor;
  .w-quarter {
    width: 25%;
  }
  .w-half {
    width: 50%;
  }
  .w-third {
    width: 33.3%;
  }
  .v-toolbox-item {
    display: inline-block;
    vertical-align: top;
    // width: 25%;
    height: 100%;
    text-align: center;
    @include fit2(line-height, 40px);
    img {
      vertical-align: middle;
      @include fit2(width, 20px);
    }
  }
}
</style>
