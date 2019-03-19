export const state = () => {
  return {
    data: null,
    post: null,
    info: null,
    news: null
  }
}

export const getters = {
  formatCenter(state) {
    const d = state.data
    if (!d) {
      return d
    }

    const a = d.avatar
    if (a) {
      let p = a.path
      const s = a.thumb_size && a.thumb_size.s
      if (s) {
        p = p.replace('__##__', s)
      }
      a.path_format = p
    }
    return d
  },
  getPostList: (state, getters) => {
    const p = state.post && state.post.list
    console.log('P: ', p)
    if (!p) {
      return p
    }
    p.map((i, idx) => {
      // 1.
      i.key = 'post-' + idx
      // 2. avatar
      {
        i.f_category = i.category
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
      }

      // 3. origin
      if (i.original !== 0) {
        i.f_category = 'repost'
        const a = i.origin_avatar
        if (a) {
          let p = a.path
          const s = a.thumb_size && a.thumb_size.s
          if (s) {
            p = p.replace('__##__', s)
          }
          a.path_format = p
          // 3. avatar info
          // a.f_from = i.from
          a.f_displayname = i.origin_member_name.displayname
          a.f_nickname = i.origin_member_name.nickname
          a.f_created_at = i.origin_created_at
          a.f_is_follow = i.origin_is_follow

          // 5. @|#
          // i.avatar = a
        }
      }

      // 4. challenge
      if (i.challenge) {
        i.f_category = 'challenge'
      }
    })
    return p
  }
}

export const mutations = {
  setCenter: (state, data) => {
    state.data = data
  },
  setPostList: (state, data) => {
    console.log('--set post list')
    state.post = data
  },
  setInfo: (state, data) => {
    console.log('--set info')
    state.info = data
  },
  setNews: (state, data) => {
    state.news = data
  }
}

export const actions = {
  async memberCenter({ commit }, params) {
    try {
      const result = await this.$api.memberCenter(params)
      const res = result.data
      commit('setCenter', res)
      return result
    } catch (error) {
      commit('setCenter', null)
    }
  },
  async memberPost({ commit }, params) {
    try {
      const result = await this.$api.memberPost(params)
      const res = result.data
      commit('setPostList', res)
      return result
    } catch (error) {
      commit('setPostList', null)
    }
  },
  async memberInfo({ commit }, params) {
    try {
      const result = await this.$api.memberInfo(params)
      const res = result.data
      commit('setInfo', res)
      return result
    } catch (error) {
      commit('setInfo', null)
    }
  },
  async memberNewsList({ commit }, params) {
    try {
      const result = await this.$api.memberNewsList(params)
      const res = result.data
      commit('setNews', res)
      return result
    } catch (error) {
      commit('setNews', null)
    }
  }
}
