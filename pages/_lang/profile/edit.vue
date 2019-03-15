<template>
  <div class="edit-profile">
    <div class="profile-header">
      <div class="header">
        <img src="~/static/images/profile/avatar.png" alt>
      </div>
    </div>
    <div class="edit-info">
      <div class="edit-item">
        <label for="name">Name</label>
        <input id="name" type="text" name="name">
      </div>
      <div class="edit-item">
        <label for="bio">Bio</label>
        <!-- <input id="bio" type="text" name="bio"> -->
        <textarea id="bio" name="bio" cols="30" rows="2" placeholder="请编辑个人简介" />
      </div>
      <div class="edit-item">
        <label for="website">Website</label>
        <input id="website" type="text" name="website">
      </div>
      <div class="edit-item">
        <label for="email">Email</label>
        <input id="email" type="text" name="email">
      </div>
      <div class="edit-item">
        <label for="birthday">Birthday</label>
        <input id="birthday" type="text" name="birthday">
      </div>
      <div class="edit-item">
        <label for="gender">Gender</label>
        <input id="gender" type="text" name="gender">
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.edit-profile {
  @include fit2(padding-bottom, 40px);
  .profile-header {
    text-align: center;
    padding: 16px 0;
    font-size: 0;
    .header {
      display: inline-block;
      @include fit2(width height, 80px);
      @include fit2(border-radius, 40px);
      background-color: $placeholderColor;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .edit-info {
    .edit-item {
      @include fit2(margin-left margin-right, 20px);
      @include fit2(padding-top, 16px);
      label {
        @include fit(14px);
        display: block;
        color: $blackColor;
        font-weight: bold;
      }
      input[type='text'],
      textarea {
        @include fit2(border-width, 1px);
        @include fit2(border-radius, 4px);
        @include fit2(margin-top, 8px);
        @include fit2(padding-left, 10px);
        @include fit2(padding-top padding-bottom, 12px);
        @include fit(14px);
        width: 100%;
        color: $blackColor;
        border-style: solid;
        border-color: $lineColor;
        outline: none;
      }
    }
  }
}
</style>
