export const state = {
  followList: {
    follower: [0, 1, 2, 3, 4, 5],
    following: [0, 1, 2, 3, 4, 5]
  }
}

export const getters = {
  getFollowerList(state) {
    return state.followList.follower
  },
  getFollowingList(state) {
    return state.followList.following
  }
}
