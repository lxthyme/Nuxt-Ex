<template>
  <div>
    <span class="show-text" v-html="showText"></span>
    <label class="expand-more" @click="showMore">{{ tips }}</label>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    links: Array
  },
  data() {
    return {
      showText: '',
      formatText: '',
      sliceText: '',
      isSlice: false,
      tips: '更多'
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.__main()
    })
  },
  methods: {
    __main() {
      if (!this.text || this.text.length <= 0) {
        return
      }
      this.showText = this.sliceText = this.text.slice(0, 200) + '...'
      this.formatText = this.__formatText()
      this.isSlice = true
    },
    showMore(e) {
      if (this.isSlice) {
        this.showText = this.formatText
        this.tips = '收起'
      } else {
        this.showText = this.sliceText
        this.tips = '更多'
      }
      this.isSlice = !this.isSlice
    },
    __formatText() {
      let t = this.text
      const l = this.links
      if (!l || l.length <= 0) {
        return
      }
      l.forEach(s => {
        t = t.replace(s, '<a href="">@' + s + '</a>')
      })
      return t
    }
  }
}
</script>
