<template>
  <div class="v-toolbox">
    <div class="v-line" />
    <!-- (div.v-toolbox-item>img)*4 -->
    <div class="v-toolbox-item">
      <img src="~/static/images/toolbox/like_red.png" alt>
    </div>
    <div class="v-toolbox-item">
      <img src="~/static/images/toolbox/comment.png" alt>
    </div>
    <div class="v-toolbox-item">
      <img src="~/static/images/toolbox/repost.png" alt>
    </div>
    <div class="v-toolbox-item">
      <img src="~/static/images/toolbox/collection.png" alt>
    </div>
  </div>
</template>

<style lang="scss">
.v-toolbox {
  @include fit2(height, 40px);
  @include fit2(padding-left padding-right, 20px);
  white-space: nowrap;
  vertical-align: top;
  background-color: $whiteColor;
}
.v-toolbox-item {
  display: inline-block;
  vertical-align: top;
  width: 25%;
  height: 100%;
  text-align: center;
  @include fit2(line-height, 40px);
}
.v-toolbox-item > img {
  vertical-align: middle;
  @include fit2(width, 20px);
}
</style>
