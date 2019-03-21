<template>
  <div>
    <Profile :data="data" />
  </div>
</template>

<script>
import Profile from '~/components/vf-profile'
import { mapState } from 'vuex'
export default {
  components: {
    Profile
  },
  computed: {
    ...mapState({
      data: state => state.center.dinfo.data
    })
  },
  async fetch({ query, store }) {
    if (store.state.center.dinfo.cache) {
      return
    }
    const params = {
      member_id: query.member_id
    }
    await store.dispatch('center/memberInfo', params)
  },
  mounted() {
    this.$nextTick(function() {
      this.$store.commit('center/setInfoCache', true)
      window.t = this
    })
  }
}
</script>
