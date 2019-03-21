<template>
    <div class="my-container">
    <label class="sign-up-title">Sign Up</label>
    <div>
      <label class="login-error-tip">同意错误提示文本信息</label>
    </div>
    <div class="name-tips">Which one you want we call you, this name can not be modified, please select the best one you like</div>
    <div class="user-name-container">
      <input v-model="formUsername" class="name-input" type="text" name="name" placeholder="Name">
    </div>
    <div class="sign-up-policy">
        Tapping sign up means you agree to the term of services and privacy policy
    </div>
    <button class="sign-up-submit" type="submit">Sign up</button>
    <div class="choose-year">
      <input class="choose-checkbox" type="checkbox"></input>
      <span class="choose-tip">I am already 18 years old</span>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'mobile'
}
</script>
<style lang="scss">
body {
  background-color: white;
}
.my-container {
  width: 100%;
  height: 100%;
  background-color: white;
  @include fit2(padding, 16px);
  .sign-up-title {
    @include fit2(margin-top, 45px);
    @include fit(24px);
    font-weight: bold;
    color: #2c2c2c;
  }
  .login-error-tip {
    @include fit(11px);
    @include fit2(margin-top, 4px);
    color: #ff2d55;
  }
  .name-tips {
    @include fit(14px);
    margin-left: 0px;
    width: 100%;
    color: #2c2c2c;
  }
  .user-name-container {
    @include fit2(margin-top, 20px);
    @include fit2(height, 38px);
    border-bottom-width: 1px;
    width: 100%;
    border-bottom-color: $lineColor;
    border-bottom-style: solid;
    line-height: 100%;
  }
  .name-input {
    border: none;
    @include fit2(height, 35px);
    @include fit(14px);
    width: 100%;
    margin-top: 0px;
    align-items: center;
  }
  .sign-up-policy {
    @include fit2(margin-top, 30px);
    @include fit(14px);
    color: #2c2c2c;
  }
  .sign-up-submit {
    @include fit2(margin-top, 19px);
    @include fit2(height, 44px);
    @include fit(14px);
    @include fit2(border-radius, 4px);
    width: 100%;
    background-color: #0094fe;
    color: #ffffff;
  }
  .choose-year {
    @include fit2(margin-top, 20px);
    margin-left: 0px;
    width: 100%;
  }
  .choose-checkbox {
    @include fit2(margin-top, 25px);
    @include fit2(width, 16px);
    @include fit2(height, 16px);
    float: left;
    margin-top: 0px !important;
  }
  .choose-tip {
    @include fit2(margin-left, 10px);
    @include fit(13px);
    color: #2c2c2c;
    float: left;
  }
  .choose-checkbox:checked + .checkbox {
    background-color: white;
    border: 1px solid gray;
    color: white;
  }
}
</style>
