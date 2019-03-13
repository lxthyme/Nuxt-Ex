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
  mounted() {
    this.$nextTick(function() {
      //   this.$nuxt.$loading.start()
      this.__main()
    })
  },
  methods: {
    __main() {
      this.$nuxt.$loading.finish()
    }
  }
}
</script>
