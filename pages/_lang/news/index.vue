<template>
  <div>
    <h2>Day News</h2>
    <p>News ID: {{ $route.params.id }}</p>
    <ul>
      <li>
        <!-- <nuxt-link :to="{path: $i18n.path(''), 'title': 'Home'}">Home</nuxt-link> -->
      </li>
      <li>
        <!-- <nuxt-link :to="{path: $i18n.path('news-id'), 'title': 'News 123', params: {id: 123}}">News-123</nuxt-link> -->
        <!-- <nuxt-link :to="{path: $i18n.path('news/id'), 'title': 'News 123', params: {id: 123}}">News-123</nuxt-link> -->
      </li>
      <li>
        <nuxt-link :to="{name: 'news-id', 'title': 'News 456', params: {id: 456}}">News-456</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'news-id', 'title': 'News s456', params: {id: 's456'}}">News-s456</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log('--->i18n: ', this.$i18n)
    // console.log('news-id: ', this.$i18n.path('news-id'))
  }
}
</script>
