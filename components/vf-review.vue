<template>
  <div class="v-reviews-bg">
    <div class="v-reviews">
      <p>{{ data.title }}</p>
      <div class="images">
        <img v-for="(item, idx) in data.images.slice(0, 4)" :key="idx" :src="item.path_format" alt>
      </div>
      <div class="v-reviews-bottom">
        <span>{{ data.from }}</span>
        <span>{{ data.read_num }} 阅读</span>
        <span class="time">{{ $moment.moment(data.created_at * 1000).format('MM/DD/YYYY') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {
        return {}
      }
    }
  }
}
</script>

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
        @include fit2(width height, 84px);
        display: inline-block;
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
