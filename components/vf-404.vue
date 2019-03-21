<template>
  <div class="v-404">
    <img src="~/static/images/404.png" alt>
    <span>{{ reason }}</span>
  </div>
</template>

<script>
export default {
  props: {
    reason: {
      type: String,
      required: false,
      default: () => {
        return ''
      }
    }
  }
}
</script>

<style lang="scss">
.v-404 {
  @include fit2(padding-top padding-bottom, 80px);
  width: 100%;
  text-align: center;
  span {
    @include fit(14px);
    @include fit2(padding-top, 10px);
    display: block;
    color: $grayColor;
  }
}
</style>
