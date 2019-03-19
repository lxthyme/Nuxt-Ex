export const state = () => ({
  showMask: false,
  postDetail: {},
  list: {
    post: {}
  },
  bannerList: [
    {
      logo: '/_nuxt/static/images/placeholder/1.png'
    },
    {
      logo: '/_nuxt/static/images/placeholder/2.png'
    },
    {
      logo: '/_nuxt/static/images/placeholder/3.png'
    },
    {
      logo: '/_nuxt/static/images/placeholder/4.png'
    }
  ]
})

export const getters = {
  getPostList: (state, getters) => {
    const p = state.list.post.list
    if (!p) {
      return p
    }
    p.map((i, idx) => {
      // 1.
      i.key = 'post-' + idx
      // 2. avatar
      const a = i.avatar
      if (a) {
        let p = a.path
        const s = a.thumb_size && a.thumb_size.s
        if (s) {
          p = p.replace('__##__', s)
        }
        a.path_format = p
        // 3. avatar info
        // a.f_from = i.from
        a.f_displayname = i.member_name.displayname
        a.f_nickname = i.member_name.nickname
        a.f_created_at = i.created_at
        a.f_is_follow = i.is_follow
        // 4. images
        const s2 = i.thumb_size && i.thumb_size.s
        if (s2) {
          i.images.map(i2 => {
            i2.path_format = i2.path.replace('__##__', s2)
          })
        }

        // 5. @|#
        // i.avatar = a
      }
    })
    return p
  },
  getBannerList(state) {
    const p = state.bannerList
    // p.key = 'banner-' + p.length + '-key'
    return p
  }
}

export const mutations = {
  setShowMask: (state, isShow) => {
    state.showMask = isShow
  },
  setPostDetail: (state, data) => {
    state.postDetail = data
  },
  setPostList: (state, data) => {
    state.list.post = data
  }
}

export const actions = {
  async postsLists({ commit }, params) {
    try {
      const result = await this.$api.postsLists(params)
      const res = result.data
      console.log('RES: ', res)
      commit('setPostList', res)
      return result
    } catch (error) {
      commit('postsLists-error: ', null)
    }
  }
}
