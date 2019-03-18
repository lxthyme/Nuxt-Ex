<template>
  <div class="my-container">
    <label class="login-title">Identification</label>
    <div><label class="login-error-tip">同意错误提示文本信息</label></div>
    <div class="user-name-container">
      <input v-model="formUsername" type="text" name="username" placeholder="Email or Nickname">
    </div>
    <div class="verification-code">
      Click to send verification code
    </div>
    <div class="user-pwd-container">
      <input v-model="formPassword" type="password" name="password" placeholder="Password">
    </div>
    <button class="next-submit" type="submit">Next</button>
  </div>
</template>
<script>
export default {
  methods: {
    test() {
      console.log('123456')
    }
  }
}
</script>
<style lang="scss">
.my-container {
  // width: 100%;
  height: 100%;
  background-color: white;
  @include fit2(padding, 16px);
  .login-title {
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
  .user-name-container {
    @include fit2(margin-top, 25px);
    @include fit2(height, 38px);
    border-bottom-width: 1px;
    width: 100%;
    border-bottom-color: $lineColor;
    border-bottom-style: solid;
    line-height: 100%;
  }
  .verification-code {
    @include fit2(padding-left padding-right, 16px);
    @include fit2(padding-top padding-bottom, 4px);
    @include fit2(margin-top, 8px);
    @include fit(12px);
    @include fit2(border-radius, 4px);
    color: #0094fe;
    border-color: $lineColor;
    border-style: solid;
    border-width: 1px;
  }
  .user-pwd-container {
    @include fit2(margin-top, 20px);
    @include fit2(height, 38px);
    border-bottom-width: 1px;
    width: 100%;
    border-bottom-style: solid;
    border-bottom-color: $lineColor;
  }
  input {
    border: none;
    @include fit2(height, 35px);
    @include fit(14px);
    width: 100%;
    margin-top: 0px;
    align-items: center;
  }
  .next-submit {
    @include fit2(margin-top, 19px);
    @include fit2(height, 44px);
    @include fit(14px);
    @include fit2(border-radius, 4px);
    width: 100%;
    background-color: #0094fe;
    color: #ffffff;
  }
}
</style>
