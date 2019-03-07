<template>
  <div v-cloak class="swiper-container m-report">
    <h2 style="background-color: white;">reportCounter: {{ reportCounter || -1 }}</h2>
    <!-- <button
      @click="$store.commit('loadData')"
      style="display: block;width: 100%;"
    >{{ $store.state.counter }}</button>-->
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="m-header">
          <img class="logo" src="~/static/images/year/top2.png" width="100%" alt>
          <div class="m-header-content" style="transform:translate3d(0,0,0);overflow:hidden;">
            <p
              class="m-title ani"
              swiper-animate-effect="fadeInDown"
              swiper-animate-duration="0.7s"
              swiper-animate-delay="0s"
            >Vaffle is officially One Year Old</p>
            <!-- <p class="m-title ani animated bounce">Vaffle is officially One Year Old</p> -->
            <p
              class="m-desc ani"
              swiper-animate-effect="fadeIn"
              swiper-animate-duration="1.5s"
              swiper-animate-delay="0.6s"
            >From February 28, 2018 to February 27, 2019</p>
          </div>
          <div style="margin-top: -42vw;transform:translate3d(0,0,0);overflow:hidden;">
            <div class="m-smoke">
              <img src="~/static/images/year/part_1/list.png" alt>
            </div>
            <div class="m-man">
              <img class="m-icon-man" src="~/static/images/year/part_1/man.png" width="100%" alt>
              <img
                class="m-circle animated infinite x-rotateIn"
                src="~/static/images/year/part_1/2.png"
                width="100%"
                alt
                srcset
              >
            </div>
          </div>
        </div>
        <div class="m-bottom-1">
          <div class="m-text">
            <div class="m-text-line">
              <p
                class="header title1 ani"
                swiper-animate-effect="fadeInUp"
                swiper-animate-duration="0.5s"
                swiper-animate-delay="0.1s"
              >On Vaffle</p>
            </div>
            <div class="m-text-line">
              <p
                class="title item-interval ani"
                swiper-animate-effect="fadeInUp"
                swiper-animate-duration="0.5s"
                swiper-animate-delay="0.4s"
              >Your level is</p>
              <p
                class="content ani"
                swiper-animate-effect="fadeInUp"
                swiper-animate-duration="0.5s"
                swiper-animate-delay="0.7s"
              >LV{{data.f_level || 0}}</p>
            </div>
            <div class="m-text-line">
              <p
                class="title item-interval ani"
                swiper-animate-effect="fadeInUp"
                swiper-animate-duration="0.5s"
                swiper-animate-delay="1.0s"
              >You have published posts in total</p>
              <p
                class="content ani"
                swiper-animate-effect="fadeInUp"
                swiper-animate-duration="0.5s"
                swiper-animate-delay="1.3s"
              >{{data.f_post_num || 0}}</p>
            </div>
            <div class="m-text-line">
              <p
                class="title item-interval ani"
                swiper-animate-effect="fadeInUp"
                swiper-animate-duration="0.5s"
                swiper-animate-delay="1.6s"
              >You have published reviews in total</p>
              <p
                class="content ani"
                swiper-animate-effect="fadeInUp"
                swiper-animate-duration="0.5s"
                swiper-animate-delay="1.9s"
              >{{data.f_review_num || 0}}</p>
            </div>
            <div class="m-text-line">
              <p
                class="title item-interval ani"
                swiper-animate-effect="fadeInUp"
                swiper-animate-duration="0.5s"
                swiper-animate-delay="2.2s"
              >You have got likes in tottal</p>
              <p
                class="content ani"
                swiper-animate-effect="fadeInUp"
                swiper-animate-duration="0.5s"
                swiper-animate-delay="2.5s"
              >{{data.f_likes_num || 0}}</p>
            </div>
            <img
              class="m-round animated infinite x-rotateIn-round"
              src="~/static/images/year/part_1/3.png"
              alt
              srcset
            >
            <img
              class="m-heart animated infinite x-rotateIn-slow"
              src="~/static/images/year/part_1/4.png"
              alt
              srcset
            >
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="m-r2">
          <!-- (p.title.item-interval+p.content)*4 -->
          <p
            class="title ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="0.5s"
            swiper-animate-delay="0.1s"
          >You have joined challenges in total</p>
          <p
            class="content ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="0.5s"
            swiper-animate-delay="0.4s"
          >{{data.f_challenge_num || 0}}</p>
          <p
            class="title item-interval ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="0.5s"
            swiper-animate-delay="0.7s"
          >You have answered questions in total</p>
          <p
            class="content ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="0.5s"
            swiper-animate-delay="1.1s"
          >{{data.f_answer_num || 0}}</p>
          <p
            class="title item-interval ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="0.5s"
            swiper-animate-delay="1.4s"
          >You have submitted vape stores in total</p>
          <p
            class="content ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="0.5s"
            swiper-animate-delay="1.7s"
          >{{data.f_shop_num || 0}}</p>
          <p
            class="title item-interval ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="0.5s"
            swiper-animate-delay="2.0s"
          >You have invited new users in total</p>
          <p
            class="content ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="0.5s"
            swiper-animate-delay="2.3s"
          >{{data.f_invite_num || 0}}</p>
          <p
            class="title item-interval ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="0.5s"
            swiper-animate-delay="2.6s"
          >You have redeemed gifts in total</p>
          <p
            class="content ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="0.5s"
            swiper-animate-delay="2.9s"
          >{{data.f_exchange_num || 0}}</p>
          <img class="m-flag-2" src="~/static/images/year/part_2/1.png" width="100%" alt srcset>
          <img
            class="m-water-2 animated infinite y-lightSpeedOut"
            src="~/static/images/year/part_2/2.png"
            width="100%"
            alt
            srcset
          >
        </div>
        <div class="m-bottom-2">
          <div style="position: relative;text-align:right;">
            <div class="m-tree-2 animated infinite x-flipInY">
              <img src="~/static/images/year/part_2/tree.png" width="100%" alt srcset>
            </div>
            <div class="m-store-2">
              <img src="~/static/images/year/part_2/store.png" width="100%" alt srcset>
            </div>
            <img
              class="m-girl-2"
              src="~/static/images/year/part_2/woman.png"
              width="100%"
              alt
              srcset
            >
            <img
              class="m-round-2 animated infinite x-rotateIn"
              src="~/static/images/year/part_2/3.png"
              alt
              srcset
            >
            <img
              class="m-cloud-1 animated infinite x-lightSpeedOut"
              src="~/static/images/year/part_2/cloud_01.png"
              width="100%"
              alt
              srcset
            >
            <img
              class="m-cloud-2 animated infinite x-lightSpeedOut x-lightSpeedOut-slow"
              src="~/static/images/year/part_2/cloud_02.png"
              width="100%"
              alt
              srcset
            >
            <img
              class="m-circle-2 animated infinite x-flash"
              src="~/static/images/year/part_2/circle.png"
              width="100%"
              alt
              srcset
            >
          </div>
        </div>
        <div class="m-bottom-icon">
          <img src="~/static/images/year/bottom.png" width="100%" alt srcset>
        </div>
      </div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
// import $ from 'jquery'
import Util from '~/plugins/util'
// import { mapActions, mapGetters, mapMutations } from 'vuex'
// import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
// import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
// import $ from '/assets/js/lib/jquery.min.js'

export default {
  name: 'Report',
  head: {
    meta: [],
    link: [],
    css: [],
    script: []
  },
  data() {
    return {
      /// 多语言
      i18n: Object,
      requestCount: 0
    }
  },
  nuxtServerInit() {},
  middleware() {},
  validate() {
    return true
  },
  // async asyncData({ $api, query }) {
  //   console.log('4. asyncData', window)
  //   const data = await $api.loadStatistics(query)
  //   return { data2: data.data }
  // },
  // render() {
  //   console.log('5. render', window)
  //   return {}
  // },
  watch: {
    requestCount(v) {
      //   const me = this
      //   if (parseInt(v) > 0) {
      //     MJJS.util.loading.show()
      //   } else {
      //     setTimeout(() => {
      //     //   console.log('requestCount: ', me.requestCount)
      //       if (parseInt(me.requestCount) === 0) {
      //         MJJS.util.loading.hide()
      //       }
      //     }, 200)
      //   }
    }
  },
  computed: {
    // ...mapState([statistics, reportCounter])
    ...mapState({
      // reportCounter: 'report/reportCounter'
      reportCounter: state => state.report.reportCounter
    }),
    ...mapGetters({
      data: 'report/statisticsFormat'
    })
  },
  // fetch({ store, params, ccc }) {
  fetch(ctx) {
    ctx.store.dispatch('report/loadStatistics', ctx.query)
  },
  mounted() {
    this.$nextTick(function() {
      this.__main()
    })
  },
  updated() {},
  methods: {
    __main() {
      this.initialSwiper()
      this.getTimelineData()
    },
    initialSwiper() {
      const swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        height: window.innerHeight + 1,
        autoHeight: true,
        loop: false,
        freeMode: false,
        touchRatio: 0.5,
        longSwipesRatio: 0.1,
        threshold: 50,
        followFinger: false,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        slidesPerView: 1,
        spaceBetween: 0,
        resistanceRatio: 0,
        // setWrapperSize: true,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next'
        },
        on: {
          init: function() {
            // swiperAnimateCache(this); // 隐藏动画元素
            // swiperAnimate(this); // 初始化完成开始动画
          },
          slideChangeTransitionEnd: function() {
            // swiperAnimate(this); // 每个slide切换结束时也运行当前slide动画
            // this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
          }
        }
      })

      if (swiper.realIndex === 666) {
        swiper.slideNext()
      }

      //   $('.swiper-slide').bind('vclick', function() {
      //     console.log('Tapped')
      //     if (swiper.realIndex === 0) {
      //       swiper.slideNext()
      //     } else if (swiper.realIndex === 1) {
      //       swiper.slidePrev()
      //     }
      //   })
      document.querySelector('body').addEventListener('touchmove', function(e) {
        document.querySelector('body').offsetTop = 0
        // console.log('Top: ', document.querySelector('body').offsetTop)
      })

      // const me = this
      // axios.get('https://api.vaffle.com/member/timeline/statistics?login=1690')
      //   .then((res) => {
      //     me.data.level = res
      //   })
      //   .catch((e) => {
      //     me.data.level = e
      //   })

      // const ip = await this.$axios.$get('http://icanhazip.com')
      // this.data.ip = ip

      // this.fetchSomething()
      // this.fetchList()
    },
    async fetchSomething() {
      const data = await this.$axios.$get(
        '/member/timeline/statistics?login=1462&v=BEB4BE4C810D020E47D6F6221229CF03066A982D&isShare=1'
      )
      this.data = data
    },
    async fetchList() {
      // lang=&login=&device=&system-version=
      // &serial-number=&version=
      // &company=&phone-model=
      // &appkey=
      // &appsecret=&invalid=1551751414
      const data = await this.$axios.$post('/sign/lists')
      this.data = data
    },
    getTimelineData() {
      // const me = this
      // const param = {}
      // me.requestCount += 1
      // MJJS.http.post2(
      //   '/member/timeline/statistics',
      //   param,
      //   function (data, res) {
      //     me.requestCount -= 1
      //     const d = JSON.parse(JSON.stringify(data.data))
      //     me.data = me.formatTimelineData(d)
      //   },
      //   function (data) {
      //     me.requestCount -= 1
      //   }
      // )
    },
    formatTimelineData(data) {
      const d = data
      if (data != null) {
        Object.keys(data).forEach(function(k) {
          const v = data[k]
          if (Util.typer(v) === 'Number') {
            d['f_' + k] = v
              .toFixed(0)
              .replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
          }
        })
      }
      return d
    }
  }
}
</script>

<style lang="css">
@import '~/assets/css/lib/swiper.min.css';
@import '~/assets/css/report.css';
</style>
