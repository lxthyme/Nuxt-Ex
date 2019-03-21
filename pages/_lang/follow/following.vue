<template>
  <div>
    <FollowList :list="$store.getters['center/getFollowingList']"/>
  </div>
</template>

<script>
import FollowList from '~/components/vf-follow-list'
export default {
  components: {
    FollowList
  },
  data() {
    return {
      mescroll: null
    }
  },
  watch: {
    'mescroll.optUp.page.num'(v) {
      if (this._inactive) {
        return
      }
      if (parseInt(v) > 0) {
        // this.$route.query.page = v
        this.$router.push({
          path: this.$route.path,
          query: { page: v }
        })
        this.$store.commit('center/setFollowingParams', {
          page: v
        })
      }
    }
  },
  async fetch({ query, store }) {
    if (store.state.center.following.cache) {
      return
    }
    const p = {
      page: query.page || store.state.center.following.params.page || 1
    }
    await store.dispatch('center/following', p)
  },
  activated() {
    console.log('activated')
    const me = this
    if (window.mescroll) {
      me.mescroll = window.mescroll
      me.mescroll.optUp.callback =
        me.loadFollowingData || me.methods.loadFollowingData

      const page = parseInt(me.$store.state.center.following.params.page)
      console.log('ing page: ', page)
      if (page > 0) {
        me.mescroll.setPageNum(page + 1)
        me.$router.push({
          path: me.$route.path,
          query: {
            ...me.$route.query,
            page: page
          }
        })
      }
    }
  },
  methods: {
    loadFollowingData(page) {
      const me = this
      console.log('following 上拉事件: ', page, '\t\tthis: ', this)
      // const query = this.$route.query
      const p = {
        member_id: this.$route.query.member_id
        // page: page.num
      }
      this.$store
        .dispatch('center/following', p)
        .then(({ data }) => {
          me.mescroll.endSuccess(data.list.length, data.total_page > 1)
        })
        .catch(error => {
          console.log('Error: ', error)
          me.mescroll.endErr()
        })
    }
  }
}
</script>
