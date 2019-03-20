<template>
  <div style="white-space: normal;">
    <h2 v-if="error.statusCode === 404">
      404页面不存在
      {{ error }}
    </h2>
    <h2 v-else>
      500服务器错误
    </h2>
    <ul>
      <li>
        <nuxt-link :to="{name: 'lang'}" exact>
          {{ $t('links.home') }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default() {
        return 'Error'
      }
    }
  }
}
</script>
