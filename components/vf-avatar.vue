<template>
  <div class="v-avatar">
    <div class="v-avatar-logo">
      <img src="~/static/images/profile/avatar.png" alt>
    </div>
    <div class="v-profile">
      <span class="v-username">Pauline Harmon</span>
      <span class="v-timeline">8 hrs ago</span>
    </div>
  </div>
</template>

<style scoped>
.v-avatar {
  padding: 10px 16px;
}
.v-avatar-logo,
.v-avatar-logo > img {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #d8d8d8;
}
.v-profile {
  display: inline-block;
  margin-top: 5px;
  margin-left: 10px;
  vertical-align: top;
}
.v-username {
  display: block;
  color: #2c2c2c;
  font-size: 14px;
  font-weight: bold;
}
.v-timeline {
  display: block;
  color: #818488;
  font-size: 12px;
}
</style>
