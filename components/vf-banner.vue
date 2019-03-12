<template>
  <!-- .swiper-container>.swiper-wrapper>.swiper-slide*5 -->
  <div :id="id" class="swiper-container" v-if="data && data.length > 0">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, idx) in data" v-bind:key="idx">
        <div class="silde-item">
          <img :src="item.logo" alt>
          <!-- <img src="~/static/images/banner-placeholder.png" alt> -->
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'

export default {
  props: {
    id: String,
    data: Array
  },
  mounted() {
    this.$nextTick(function() {
      this.__main()
    })
  },
  methods: {
    __main() {
      if (!this.data || this.data.length <= 0) {
        return
      }
      this.initialSwiper()
    },
    initialSwiper() {
      console.log('initialSwiper: ', this.id, '\t\tdata: ', this.data)
      // const swiper = new Swiper('.swiper-container', {
      const swiper = new Swiper(this.id, {
        direction: 'horizontal',
        autoplay: true,
        // height: auto,
        // autoHeight: true,
        // loop: true,
        // freeMode: false,
        // touchRatio: 0.5,
        // longSwipesRatio: 0.1,
        // threshold: 50,
        // followFinger: false,
        // observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        // observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        // slidesPerView: 1,
        // spaceBetween: 0,
        // resistanceRatio: 0,
        // setWrapperSize: true,
        nested: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        navigation: {
          prevEl: '.swiper-button-prev',
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
    }
  }
}
</script>

<style>
@import '~/assets/css/lib/swiper.min.css';
/* @import '~/assets/css/lib/swiper.css'; */

.swiper-container {
  max-width: 660px;
  width: 100%;
  height: 366px;
}
.swiper-slide,
.silde-item {
  position: relative;
  width: 100%;
  height: 100%;
}
.silde-item img {
  display: block;
  width: 100%;
  height: 100%;
  background-color: #d8d8d8;
}
.silde-item h1 {
  position: absolute;
  top: 0;
  font-size: 14px;
}
.swiper-pagination-bullet-active {
  background-color: #fff;
}
.swiper-pagination-bullet {
  background-color: #e8e9ed;
}
</style>
