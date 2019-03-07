<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        {{ $t('pj.name') }}
      </h1>
      <h2 class="subtitle">
        {{ $t('pj.introduction') + '-' + $i18n.path('about') }}
      </h2>
      <ul>
        <li>
          <nuxt-link v-if="$i18n.locale === 'en'" :to="`/zh` + $route.fullPath" exact>
            {{ $t('links.chinese') }}
          </nuxt-link>
          <nuxt-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" exact>
            {{ $t('links.english') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{path: $i18n.path('')}" exact>{{ $t('links.home') }}</nuxt-link>
        </li>
        <li>
          <button @click="increment">{{ counter }}</button>
          <!-- <nuxt-link :to="{name: 'about', path: $i18n.path('about')}">{{ $t('links.about') }}</nuxt-link> -->
          <nuxt-link :to="{path: $i18n.path('about')}" exact>{{ $t('links.about') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{path: $i18n.path('news'), params: {id: 330}}" exact>{{ $t('links.news') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{path: $i18n.path('async_data')}" exact>{{ $t('links.ansyc_data') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{path: $i18n.path('todos')}" exact>{{ $t('links.todos') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{path: $i18n.path('secret')}" exact>{{ $t('links.secret') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{path: $i18n.path('login')}" exact>{{ $t('links.login') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{path: $i18n.path('report')}" exact>{{ $t('links.report') }}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapState } from 'vuex'
// import { mapActions } from 'vuex'

export default {
  components: {
    Logo
  },
  computed: {
    ...mapState(['counter'])
  },
  fetch({ store }) {
    store.commit('increment')
  },
  methods: {
    // ...mapActions(['increment'])
    increment() {
      console.log('--->i18n: ', this.$i18n)
      console.log('news-id: ', this.$i18n.path('news-id'))

      this.$store.commit('increment')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
