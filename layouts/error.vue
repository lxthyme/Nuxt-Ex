<template>
  <div>
    <h2 v-if="error.statusCode=404">
      404页面不存在
      {{ error }}
    </h2>
    <h2 v-else>
      500服务器错误
    </h2>
    <ul>
      <li>
        <NuxtLink :to="$i18n.path('')" exact>{{ $t('links.home') }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
