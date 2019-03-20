<template>
  <div>
    <div class="influence">
      <div class="icon">
        <img src="~/static/images/profile/infulence.png" alt>
        <span>Influence</span>
      </div>
      <div class="influence-content">
        <div v-for="(item, idx) in data.contribution" :key="idx" class="item">
          <span class="value">{{ item.val }}</span>
          <span class="name">{{ item.tip }}</span>
        </div>
      </div>
      <div class="basic-information">
        <span class="title">Basic information</span>
        <div class="item">
          <img class="logo" src="~/static/images/profile/Group 7 Copy 6.png" alt>
          <span class="value">
            <span v-for="(item2, idx2) in data.device" :key="idx2">{{ item2.brand_name }}/{{ item2.type_name }}; </span>
          </span>
        </div>
        <div class="item">
          <img class="logo" src="~/static/images/profile/position.png" alt>
          <span class="value">{{ data.nation_name }}</span>
        </div>
        <div class="item">
          <img class="logo" src="~/static/images/profile/birth.png" alt>
          <span class="value">{{ $moment.moment(data.birthday_date).format('DD MMM YYYY') }}</span>
        </div>
        <div class="item">
          <img class="logo" src="~/static/images/profile/ic_language_change copy.png" alt>
          <a :href="data.website" class="value">{{ data.website }}</a>
        </div>
      </div>
      <div class="introduction">
        <span class="title">Introduction</span>
        <p>{{ data.profile }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: false,
      default: () => {
        return null
      }
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
