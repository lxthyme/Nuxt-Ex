<template>
  <section class="container">
    <div>
      <logo></logo>
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
          <nuxt-link :to="{name: 'lang'}" exact>{{ $t('links.home') }}</nuxt-link>
        </li>
        <li>
          <button @click="increment">{{ counter }}</button>
          <!-- <nuxt-link :to="{name: 'about', path: $i18n.path('about')}">{{ $t('links.about') }}</nuxt-link> -->
          <nuxt-link :to="{name: 'lang-about'}" exact>{{ $t('links.about') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name: 'lang-news', params: {id: 330}}" exact>{{ $t('links.news') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name: 'lang-async_data'}" exact>{{ $t('links.ansyc_data') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name: 'lang-todos'}" exact>{{ $t('links.todos') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name: 'lang-secret'}" exact>{{ $t('links.secret') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name: 'lang-login'}" exact>{{ $t('links.login') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name: 'lang-report'}" exact>{{ $t('links.report') }}</nuxt-link>
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
