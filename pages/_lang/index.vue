<template>
  <div>
    <Following />
  </div>
</template>

<script>
import Following from '~/components/vf-following'
export default {
  layout: 'main',
  components: {
    Following
  },
  data() {
    return {
      type: 'following'
    }
  },
  watch: {},
  mounted() {
    this.$nextTick(function() {
      this.$nuxt.$loading.finish()
      this.__main()
    })
  },
  methods: {
    __main() {}
  }
}
</script>

<style scoped>
</style>
