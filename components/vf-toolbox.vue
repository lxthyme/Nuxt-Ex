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

<style scoped>
.v-toolbox {
  height: 40px;
  padding: 0 20px;
  white-space: nowrap;
  vertical-align: top;
  background-color: #fff;
}
.v-toolbox-item {
  display: inline-block;
  vertical-align: top;
  width: 25%;
  height: 100%;
  text-align: center;
  line-height: 40px;
}
.v-toolbox-item > img {
  vertical-align: middle;
}
</style>
