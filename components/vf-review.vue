<template>
  <div class="v-reviews-bg">
    <div class="v-reviews">
      <p>What Can Happen If High Blood Pressure Is Left Untreated</p>
      <div class="images">
        <img src="~/static/images/placeholder/reviews.png" alt>
        <img src="~/static/images/placeholder/reviews.png" alt>
        <img src="~/static/images/placeholder/reviews.png" alt>
        <img src="~/static/images/placeholder/reviews.png" alt>
      </div>
      <div class="v-reviews-bottom">
        <span>谷歌搜索</span>
        <span>26 阅读</span>
        <span class="time">1小时前</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.profile {
  background-color: $placeholderColor;
  .v-reviews {
    @include fit2(padding-left padding-right, 16px);
    @include fit2(margin-bottom, 4px);
    background-color: $whiteColor;
    p {
      @include fit(15px);
      @include fit2(padding-top, 12px);
      @include fit2(padding-bottom, 10px);
      color: $blackColor;
    }
    .images {
      font-size: 0;
      img {
        @include fit2(padding-left padding-right border-radius, 1px);
        display: inline-block;
        width: 25%;
      }
    }
    .v-reviews-bottom {
      @include fit2(padding-top, 8px);
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
