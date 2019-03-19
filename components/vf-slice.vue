<template>
  <div>
    <span class="show-text" v-html="showText" />
    <label v-if="canShowSlice" class="expand-more" @click="showMore">{{ tips }}</label>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: ''
    },
    links: {
      type: Array,
      required: true,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      showText: '',
      fullFormatText: '',
      sliceText: '',
      isSlice: false,
      tips: '更多',
      canShowSlice: false
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.__main()
    })
  },
  methods: {
    __main() {
      if (this.text.length <= 200) {
        this.showText = this.__formatText(this.text)
        this.canShowSlice = false
        return
      }
      this.canShowSlice = true
      const sliceText = this.text.slice(0, 200) + '...'
      this.showText = this.sliceText = this.__formatText(sliceText)
      this.fullFormatText = this.__formatText(this.text)
      this.isSlice = true
    },
    showMore(e) {
      if (this.isSlice) {
        this.showText = this.fullFormatText
        this.tips = '收起'
      } else {
        this.showText = this.sliceText
        this.tips = '更多'
      }
      this.isSlice = !this.isSlice
    },
    __formatText(t) {
      const l = this.links

      // #
      t = t.replace(/#([\S]+)/g, '<a href="">#$1</a>')

      // @
      if (!l || l.length <= 0) {
        return t
      }
      t = t.replace('@', '')
      l.forEach(s => {
        const n = s.member_name.nickname
        t = t.replace(n, '<a href="">@' + n + '</a>')
      })

      return t
    }
  }
}
</script>


<style lang="scss">
.show-text {
  @include fit(14px);
  color: $blackColor;
  word-break: break-word;
}
</style>
