export const state = () => {
  return {
    dcenter: {
      data: null,
      params: null,
      cache: false
    },
    dinfo: {
      data: null,
      params: null,
      cache: false
    },
    dreviews: {
      data: null,
      params: {
        last_id: null,
        page: 1,
        total_page: 1
      },
      cache: null
    },
    dpost: {
      data: null,
      params: {
        last_id: null,
        page: 1,
        total_page: 1
      },
      cache: null
    },
    followers: {
      data: {},
      params: {
        last_id: null,
        page: 1,
        total_page: 1
      },
      cache: null
    },
    following: {
      data: {},
      params: {
        last_id: null,
        page: 1,
        total_page: 1
      },
      cache: null
    }
  }
}
export const getters = {
  formatCenter(state) {
    const d = state.dcenter.data
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
  getPostList(state) {
    const p = state.dpost.data && state.dpost.data.list
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

          // 6. icon
          a.member_name = i.member_name
        }
      }

      // 3. repost
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

          // 6. icon
          a.member_name = i.origin_member_name
        }
      } else if (i.challenge) {
        // 4. challenge
        i.f_category = 'challenge'
      } else if (i.video) {
        // 5. video
        i.f_category = 'video'
      }
    })
    return p
  },
  getReviewsList(state) {
    const l = state.dreviews.data && state.dreviews.data.list
    if (!l) {
      return
    }

    l.map(item => {
      const images = item.images
      const thumbSize = item.thumb_size
      if (images && thumbSize) {
        images.map(img => {
          const path = img.path
          img.path_format = path.replace('__##__', thumbSize.s)
        })
        item.images = images
      }
    })
    return l
  },
  getFollowersList(state) {
    const er = state.followers.data.list
    if (!er) {
      return
    }
    er.map((i, idx) => {
      // 1. avatar
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
        a.f_is_follow = i.is_follow

        // 5. @|#
        // i.avatar = a

        // 6. icon
        a.member_name = i.member_name
      }
    })
    return er
  },
  getFollowingList(state) {
    const ing = state.following.data.list
    if (!ing) {
      return
    }
    ing.map((i, idx) => {
      // 1. avatar
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
        a.f_is_follow = i.is_follow

        // 5. @|#
        // i.avatar = a

        // 6. icon
        a.member_name = i.member_name
      }
    })
    return ing
  }
}

export const mutations = {
  resetPageData(state) {
    console.log('resetPageData')
    this.commit('center/resetCenter')
    this.commit('center/resetInfo')
    this.commit('center/resetPost')
    this.commit('center/resetReviews')
  },
  // center
  setCenterData(state, data) {
    state.dcenter.data = data
  },
  setCenterCache(state, cache) {
    state.dcenter.cache = cache
  },
  resetCenter(state) {
    state.dcenter = {
      data: null,
      params: {
        last_id: null,
        page: 1,
        total_page: 1
      },
      cache: null
    }
  },
  // info
  resetInfo(state) {
    state.dinfo = {
      data: null,
      params: {
        last_id: null,
        page: 1,
        total_page: 1
      },
      cache: null
    }
  },
  setInfoData(state, data) {
    state.dinfo.data = data
  },
  setInfoCache(state, cache) {
    state.dinfo.cache = cache
  },
  // Post
  resetPost(state) {
    state.dpost = {
      data: null,
      params: {
        last_id: null,
        page: 1,
        total_page: 1
      },
      cache: null
    }
  },
  setPostData(state, data) {
    state.dpost.data = data
  },
  setPostParams(state, params) {
    state.dpost.params = {
      ...state.dpost.params,
      ...params
    }
  },
  setPostCache(state, cache) {
    state.dpost.cache = cache
  },
  // Reviews
  resetReviews(state) {
    state.dreviews = {
      data: null,
      params: {
        last_id: null,
        page: 1,
        total_page: 1
      },
      cache: null
    }
  },
  setReviewsData(state, data) {
    state.dreviews.data = data
  },
  setReviewsParams(state, params) {
    state.dreviews.params = {
      ...state.dreviews.params,
      ...params
    }
  },
  setReviewsCache(state, cache) {
    state.dreviews.cache = cache
  },
  // followers
  setFollowersData(state, er) {
    state.followers.data = er
  },
  setFollowersParams(state, params) {
    state.followers.params = {
      ...state.followers.params,
      ...params
    }
  },
  setFollowersCache(state, cache) {
    state.followers.cache = cache
  },
  // following
  setFollowingData(state, ing) {
    state.following.data = ing
  },
  setFollowingParams(state, params) {
    state.following.params = {
      ...state.following.params,
      ...params
    }
  },
  setFollowingCache(state, cache) {
    state.following.cache = cache
  }
}

export const actions = {
  async memberCenter({ commit, state }, params) {
    try {
      const result = await this.$api.memberCenter(params)
      const res = result.data
      commit('setCenterData', res)
      return result
    } catch (error) {
      // commit('setCenterData', null)
    }
  },
  async memberPost({ commit, state }, params) {
    try {
      const p = {
        ...params
      }
      if (!params.page) {
        p.page = state.dpost.params.page + 1
      }
      if (state.dpost.params.last_id) {
        p.last_id = state.dpost.params.last_id
      }
      const result = await this.$api.memberPost(p)
      const res = result.data
      let last = res.list.slice(-1)
      last = last[0]
      const _p = {
        last_id: last && last.post_id,
        page: res.page,
        total_page: res.total_page
      }
      commit('setPostParams', _p)
      if (
        params.page > 1 &&
        state.dpost.data &&
        state.dpost.data.list.length >= 0
      ) {
        res.list = state.dpost.data.list.concat(res.list)
      }
      commit('setPostData', res)
      return result
    } catch (error) {
      commit('setPostData', null)
    }
  },
  async memberInfo({ commit }, params) {
    try {
      const result = await this.$api.memberInfo(params)
      const res = result.data
      commit('setInfoData', res)
      return result
    } catch (error) {
      // commit('setInfo', null)
    }
  },
  async reviewsList({ commit, state }, params) {
    try {
      const p = {
        ...params
      }
      if (!params.page) {
        p.page = state.dreviews.params.page + 1
      }
      if (state.dreviews.params.last_id) {
        p.last_id = state.dreviews.params.last_id
      }
      const result = await this.$api.newsList(p)
      const res = result.data
      let last = res.list.slice(-1)
      last = last[0]
      const _p = {
        last_id: last && last.post_id,
        page: res.page,
        total_page: res.total_page
      }
      commit('setReviewsParams', _p)
      if (
        params.page > 1 &&
        state.dreviews.data &&
        state.dreviews.data.list.length >= 0
      ) {
        res.list = state.dreviews.data.list.concat(res.list)
      }
      commit('setReviewsData', res)
      return result
    } catch (error) {
      console.log('setReviewsData: ', error)
      // commit('setReviewsData', null)
    }
  },
  async followers({ state, commit }, params) {
    try {
      if (!params.page) {
        params.page = state.followers.params.page
      }
      if (!params.last_id) {
        params.last_id = state.followers.params.last_id
      }
      const result = await this.$api.followers(params)
      const res = result.data
      if (
        (params.page > 1 || !!params.last_id) &&
        state.followers.data.list.length >= 0
      ) {
        res.list = state.followers.data.list.concat(res.list)
      }
      commit('setFollowersData', res)

      if (!state.followers.cache) {
        commit('setFollowersCache', true)
      }

      let last = res.list.slice(-1)
      last = last[0]
      const _p = {
        last_id: last.member_id,
        total_page: res.total_page
      }
      commit('setFollowersParams', _p)

      return result
    } catch (error) {
      // commit('setFollowersData', null)
    }
  },
  async following({ state, commit }, params) {
    try {
      if (!params.page) {
        params.page = state.following.params.page
      }
      if (!params.last_id) {
        params.last_id = state.following.params.last_id
      }
      const result = await this.$api.following(params)
      const res = result.data
      if (
        (params.page > 1 || !!params.last_id) &&
        state.following.data.list.length >= 0
      ) {
        res.list = state.following.data.list.concat(res.list)
      }
      commit('setFollowingData', res)
      if (!state.following.cache) {
        commit('setFollowingCache', true)
      }

      let last = res.list.slice(-1)
      last = last[0]
      const _p = {
        last_id: last.member_id,
        total_page: res.total_page
      }
      commit('setFollowingParams', _p)

      return result
    } catch (error) {
      // commit('setFollowingData', null)
    }
  }
}
