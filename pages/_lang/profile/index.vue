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
  async fetch({ query, store }) {
    const params = {
      member_id: 1462
    }
    await store.dispatch('center/memberInfo', params)
    console.log('END-info')
  },
  computed: {
    ...mapState({
      data: state => state.center.info
    })
  },
  mounted() {
    this.$nextTick(function() {
      // this.__main()
      window.t = this
      console.log('T: ', this)
    })
  }
}
</script>
