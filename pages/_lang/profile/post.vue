<template>
  <div>
    <div v-for="item in $store.getters['center/getPostList']" :key="item.key">
      <Post v-if="item.f_category === 'posts'" :key="item.key" :item="item"/>
      <Challenge v-if="item.f_category === 'challenge'" :key="item.key" :item="item"/>
      <Repost v-if="item.f_category === 'repost'" :key="item.key" :item="item"/>
    </div>
  </div>
</template>

<script>
import Post from '~/components/vf-post'
import Repost from '~/components/vf-repost'
import Challenge from '~/components/vf-challenge'

export default {
  components: {
    Post,
    Repost,
    Challenge
  },
  async fetch({ query, store }) {
    const params = {
      type: query.type || 'all',
      member_id: 1462,
      page: query.page || 1
    }
    await store.dispatch('center/memberPost', params)
    console.log('END-post')
  },
  mounted() {
    this.$nextTick(function() {
      this.__main()
    })
  },
  methods: {
    __main() {
      this.initInfiniteScroll()
    },
    initInfiniteScroll() {
      console.log('1')
      const $$ = window.app.$
      $$('.pull-to-refresh-content').on('refresh', function(e) {
        console.log('refresh')
      })
    }
  }
}
</script>

<style lang="scss">
.influence {
  @include fit2(padding-top padding-bottom, 14px);
  @include fit2(padding-left padding-right, 16px);
  background-color: $whiteColor;
  font-size: 0;
  .icon {
    position: relative;
    display: inline-block;
    img {
      display: block;
      @include fit2(width, 67px);
      @include fit2(height, 20px);
    }
    span {
      @include fit(12px);
      position: absolute;
      top: 50%;
      width: 100%;
      text-align: center;
      transform: translateY(-50%);
      color: $whiteColor;
    }
  }
  .influence-content {
    @include fit2(padding-top, 12px);
    .item {
      @include fit2(margin-bottom, 8px);
      @include fit2(padding-top, 8px);
      @include fit2(padding-bottom, 10px);
      @include fit2(padding-left padding-right, 16px);
      @include fit2(border-radius, 4px);
      background-color: $placeholderColor;
      .value {
        display: block;
        color: $darkBlueColor;
        @include fit(14px);
        font-weight: bold;
      }
      .name {
        display: block;
        color: $grayColor;
        @include fit(14px);
      }
    }
  }
  .basic-information {
    @include fit2(padding-top, 24px);
    color: $blackColor;
    .title {
      @include fit(12px);
      @include fit2(padding-bottom, 4px);
      display: block;
      font-weight: bold;
    }
    .item {
      @include fit2(padding-top padding-bottom, 12px);
      display: block;
      .logo {
        @include fit2(width, 13px);
        @include fit2(height, 14px);
      }
      .value {
        @include fit(14px);
        @include fit2(padding-left, 10px);
      }
      a.value {
        text-decoration: none;
        color: $darkBlueColor;
      }
    }
  }
  .introduction {
    color: $blackColor;
    .title {
      @include fit(12px);
      @include fit2(padding-top, 14px);
      @include fit2(padding-bottom, 8px);
      display: block;
      font-weight: bold;
    }
    p {
      @include fit(14px);
    }
  }
}
</style>
