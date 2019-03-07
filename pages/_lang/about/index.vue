<template>
  <div>
    <h2>{{ $t('links.about') }}</h2>
    <p>{{ $t('about.introduction') }}</p>
    <ul>
      <li>
        <nuxt-link :to="$i18n.path('')" exact>{{ $t('links.home') }}</nuxt-link>
      </li>
    </ul>
    <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
  </div>
</template>

<script>
export default {
  transition: 'test'
}
</script>
