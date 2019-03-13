<template>
  <div>
    <div class="panel-top-content v-shadow">
      <span class="content-header">Menu</span>
      <ul>
        <li class="content-item">
          <img src alt>
          <span class="title">Collection</span>
        </li>
        <li class="content-item">
          <img src alt>
          <span class="title">Q/A</span>
        </li>
      </ul>
    </div>
    <div class="panel-bottom-content v-shadow">
      <span class="content-header">Suggestion for you</span>
      <div class="v-line" />
      <div class="v-suggestion">
        <div class="suggestion-item">
          <Avatar />
          <button>Follow</button>
          <div class="v-line" />
        </div>
        <div class="suggestion-item">
          <Avatar />
          <button>Follow</button>
          <div class="v-line" />
        </div>
        <div class="suggestion-item">
          <Avatar />
          <button>Follow</button>
          <div class="v-line" />
        </div>
        <div class="suggestion-item">
          <Avatar />
          <button>Follow</button>
          <div class="v-line" />
        </div>
        <div class="suggestion-item">
          <Avatar />
          <button>Follow</button>
          <div class="v-line" />
        </div>
        <div class="see-all">
          <button>See all</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '~/components/vf-avatar'
export default {
  components: {
    Avatar
  }
}
</script>

<style scoped>
.panel-top-content {
  padding-bottom: 10px;
  background-color: #fff;
  border-radius: 4px;
}
.panel-top-content .content-header {
  display: inline-block;
  color: #000;
  font-size: 14px;
  font-weight: bold;
  padding: 12px 16px;
}
.panel-top-content .content-item {
  padding: 12px 16px;
  list-style: none;
}
.panel-top-content .content-item .title {
  display: inline-block;
  color: #2c2c2c;
  font-size: 14px;
}
.panel-bottom-content {
  background-color: #fff;
  border-radius: 4px;
  margin-top: 20px;
}
.panel-bottom-content .content-header {
  display: inline-block;
  padding: 13px 16px;
  color: #000;
  font-size: 13px;
  font-weight: bold;
}
.suggestion-item {
  position: relative;
  padding: 3px 0;
}
.suggestion-item button {
  position: absolute;
  top: 50%;
  right: 21px;
  transform: translateY(-50%);
  color: #0094fe;
  font-size: 11px;
  font-weight: bold;
}
.see-all {
  padding: 13px 0 14px;
  text-align: center;
}
.see-all button {
  font-size: 11px;
  color: #0094fe;
}
</style>
