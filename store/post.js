export const state = () => ({
  showMask: false,
  postDetail: {},
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
  ],
  postList: [
    {
      text:
        'For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens. And to be sure, ' +
        'that is the exciting area of astronomy that accounts for it’s huge popularity. So to the uninitiated, the idea of “radio astronomy” seems strange. There are two reasons' +
        'for that. First is that humans are far more visual than audio oriented.',
      links: ['astronomy'],
      images: [
        {
          logo: '/_nuxt/static/images/placeholder/1.png'
        }
      ]
    },
    {
      text:
        'For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens. And to be sure, ' +
        'that is the exciting area of astronomy that accounts for it’s huge popularity. So to the uninitiated, the idea of “radio astronomy” seems strange. There are two reasons' +
        'for that. First is that humans are far more visual than audio oriented.',
      links: ['astronomy', 'something we'],
      images: [
        {
          logo: '/_nuxt/static/images/placeholder/1.png'
        },
        {
          logo: '/_nuxt/static/images/placeholder/2.png'
        }
      ]
    },
    {
      text:
        'For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens. And to be sure, ' +
        'that is the exciting area of astronomy that accounts for it’s huge popularity. So to the uninitiated, the idea of “radio astronomy” seems strange. There are two reasons' +
        'for that. First is that humans are far more visual than audio oriented.',
      links: ['astronomy', 'something we', 'magnificent'],
      images: [
        {
          logo: '/_nuxt/static/images/placeholder/1.png'
        },
        {
          logo: '/_nuxt/static/images/placeholder/2.png'
        },
        {
          logo: '/_nuxt/static/images/placeholder/3.png'
        }
      ]
    },
    {
      text:
        'For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens. And to be sure, ' +
        'that is the exciting area of astronomy that accounts for it’s huge popularity. So to the uninitiated, the idea of “radio astronomy” seems strange. There are two reasons' +
        'for that. First is that humans are far more visual than audio oriented.',
      links: ['astronomy', 'something we', 'magnificent', 'radio astronomy'],
      images: [
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
    },
    {
      text:
        'For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens. And to be sure, ' +
        'that is the exciting area of astronomy that accounts for it’s huge popularity. So to the uninitiated, the idea of “radio astronomy” seems strange. There are two reasons' +
        'for that. First is that humans are far more visual than audio oriented.',
      links: [
        'For',
        'astronomy',
        'magnificent',
        'radio astronomy',
        'accounts for it’s',
        'First is that humans are far more visual than audio oriented'
      ],
      images: [
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
        },
        {
          logo: '/_nuxt/static/images/placeholder/2.png'
        }
      ]
    }
  ]
})

export const getters = {
  getPostList(state) {
    const p = state.postList
    p.map((i, idx) => {
      i.key = 'key-' + idx
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
  }
}
