<template>
  <div style="margin-bottom: 20px;">
    <div v-if="type === 'post'">
      <Banner></Banner>
      <Post></Post>
      <Post></Post>
    </div>
    <div v-else-if="type === 'news'">
      <News></News>
      <News></News>
    </div>
    <div v-else-if="type === 'qa'">
      <QA></QA>
      <QA></QA>
    </div>
    <div v-else>
      <Following></Following>
      <Following></Following>
    </div>
  </div>
</template>

<script>
import Banner from '~/components/vf-banner'
import Following from '~/components/vf-following'
import Post from '~/components/vf-post'
import News from '~/components/vf-news'
import QA from '~/components/vf-qa'

export default {
  layout: 'main',
  components: {
    Banner,
    Following,
    Post,
    News,
    QA
  },
  data() {
    return {
      type: ''
    }
  },
  watch: {},
  mounted() {
    this.$nextTick(function() {
      this.$nuxt.$loading.start()
      this.__main()
    })
  },
  methods: {
    __main() {
      console.log('Type1: ', this.type)
      this.type = this.$route.params.type || 'following'
      console.log('Type2: ', this.type)
      this.$nuxt.$loading.finish()
    }
  }
}
</script>
