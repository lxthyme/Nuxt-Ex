<template>
  <div class="v-nodata">
    <img src="~/static/images/nodata.png" alt>
    <span>No Comments Here</span>
  </div>
</template>

<style lang="scss">
.v-nodata {
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
