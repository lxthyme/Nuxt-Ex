<template>
  <div>
    <div class="influence">
      <div class="icon">
        <img src="~/static/images/profile/infulence.png" alt>
        <span>Influence</span>
      </div>
      <div class="influence-content">
        <div class="item">
          <span class="value">3</span>
          <span class="name">Number of posts yesterday</span>
        </div>
        <div class="item">
          <span class="value">8,127</span>
          <span class="name">Number of posts yesterday</span>
        </div>
      </div>
      <div class="basic-information">
        <span class="title">Basic information</span>
        <div class="item">
          <img class="logo" src="~/static/images/profile/Group 7 Copy 6.png" alt>
          <span class="value">2JNT Mods/Supremo</span>
        </div>
        <div class="item">
          <img class="logo" src="~/static/images/profile/position.png" alt>
          <span class="value">Tokyo, Japan</span>
        </div>
        <div class="item">
          <img class="logo" src="~/static/images/profile/birth.png" alt>
          <span class="value">16 Feb 1992</span>
        </div>
        <div class="item">
          <img class="logo" src="~/static/images/profile/ic_language_change copy.png" alt>
          <a href="https://www.heavengifts.com" class="value">https://www.heavengifts.com</a>
        </div>
      </div>
      <div class="introduction">
        <span class="title">Introduction</span>
        <p>{{ intro }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intro:
        'Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for picking up women or men. 1) Coca-Cola: Did you know that its original colour was green? 2) Mohammed: Did you know that this is the most used name in the entire world? 3) Geographical Letters: Did you know that the name of each of the continents begins and concludes with the exact same alphabet? Do not believe that? Look up Asia, Europe, Africa, America, Antarctica and the rest. 4) Muscle Strength: Did you know that the strongest muscle in the entire body is that one which we use to lick a popsicle? Your tongue. 5) Credit Cards: In the United States, were you aware that each and every person has at least two credit cards? 6) An Antique Machine: The word for an old machine that was once used for writing letters and other documents is the largest word that one can make if they click only on a single row of their computer’s keyboard: typewriter! 7) Blink: Men wink at women, but research has found out that the average woman blinks nearly two times more than the average man. 8) Suicide: Even though you might have wondered if it was possible, studies have discovered that it is impossible to kill oneself by simply holding in your breath. 9) Licking: However much you may try, you will never be able to lick your elbows. 10) Sneeze: Try sneezing. People will automatically answer you with a bless you greeting. Have you ever imagined why? Some say that this happens because a sneeze stops the functioning of the heart for a very tiny second. 11) The Blue Sky: Did you know that a pig, no matter how much they try, cannot look up into the sky? 12) Twisting Your Tongue: We have all dabbled with different tongue-twisters in our day. But do you know which is the toughest? Sixth sick sheiks sixth sheeps sick. 13) Ribs: Did you know that you should try not to sneeze too strongly. Why? A very powerful sneeze has the ability to cause a fracture in your ribcage. But, then again, if you try and withhold one, you stand the chance of breaking one of the many blood vessels in your neck or head. This could cause death. 14) Cards: Did you think that the Kings are all just random cards referring to random figures? No. Each one signifies a different king: Diamonds for Julius Caesar, Clubs for Alexander the Great, Spades for David and Hearts for Charlemagne. 15) And finally: Most everyone reading this (Caught You!) are trying to lick their elbows at this exact moment!'
    }
  },
  async fetch({ query, store }) {
    const params = {
      member_id: 1462
    }
    await store.dispatch('center/setInfo', params)
    console.log('END-info')
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
