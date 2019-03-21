<template>
  <div style="white-space: normal;">
    <h2 v-if="error.statusCode === 404">
      <V404 :reason="error" />
    </h2>
    <h2 v-else>
      <V404 reason="500服务器错误" />
    </h2>
    <!-- <ul>
      <li>
        <nuxt-link :to="{name: 'lang'}" exact>
          {{ $t('links.home') }}
        </nuxt-link>
      </li>
    </ul> -->
  </div>
</template>

<script>
import V404 from '~/components/vf-404'
export default {
  components: {
    V404
  },
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
