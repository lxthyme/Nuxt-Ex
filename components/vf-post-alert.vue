<template>
  <div class="v-container">
    <div class="v-wrapper">
      <Post :key="item.key" :item="item"></Post>
    </div>
  </div>
</template>

<script>
import Post from '~/components/vf-post'

export default {
  components: {
    Post
  },
  props: {
    item: Object
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

<style scoped>
.v-container {
  max-width: 700px;
  margin: 0 auto;
  height: 100%;
  padding: 60px 20px 20px;
}
.v-wrapper {
  background-color: #fff;
  height: 100%;
  overflow-y: auto;
  border-radius: 4px;
}
.v-content {
  height: 2000px;
}
</style>
