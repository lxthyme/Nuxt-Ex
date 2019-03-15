<template>
  <div>
    <FollowList :list="$store.getters['user/getFollowerList']"/>
  </div>
</template>

<script>
import FollowList from '~/components/vf-follow-list'
export default {
  components: {
    FollowList
  }
}
</script>
