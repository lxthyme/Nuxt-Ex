<template>
  <div>
    <span>{{ showText }}</span>
    <label class="expand-more" @click="showMore">更多</label>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  },
  data() {
    return {
      showText: '',
      sliceText: '',
      isSlice: false
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.__main()
    })
  },
  methods: {
    __main() {
      this.showText = this.sliceText = this.text.slice(0, 200)
      this.isSlice = true
    },
    showMore(e) {
      if (this.isSlice) {
        this.showText = this.sliceText
      } else {
        this.showText = this.text
      }
      this.isSlice = !this.isSlice
    }
  }
}
</script>
