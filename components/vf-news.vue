<template>
  <div class="v-item-post-s">
    <div class="v-item-post">
      <Avatar/>
      <div class="v-content">
        <VFText :text="text"/>
      </div>
      <Banner/>
      <div class="v-content-achievement">
        <p>12.5k likes 15,065 comments</p>
      </div>
      <div class="v-toolbox">
        <div class="v-line"/>
        <!-- (div.v-toolbox-item>img)*4 -->
        <div class="v-toolbox-item">
          <img src="~/static/images/toolbox/like_red.png" alt>
        </div>
        <div class="v-toolbox-item">
          <img src="~/static/images/toolbox/comment.png" alt>
        </div>
        <div class="v-toolbox-item">
          <img src="~/static/images/toolbox/repost.png" alt>
        </div>
        <div class="v-toolbox-item">
          <img src="~/static/images/toolbox/collection.png" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '~/components/vf-banner'
import Avatar from '~/components/vf-avatar'
import VFText from '~/components/vf-slice'
export default {
  components: {
    Banner,
    Avatar,
    VFText
  },
  data() {
    return {
      text:
        'The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three… the most magnificent & awe inspiring. Bryce Canyon isn’t a canyon. it is the spectacular edge of the Paunsaugunt Plateau, a place where intricately carved towers & archways of stone shimmer in a dazzling array of colour under the bright sun. The rock in Bryce Canyon is composed of layer after layer of sediment deposits, deposited millions of years ago when the area was at the bottom of a lake. Now the Paria River has exposed the layers, allowing a detailed history of the lake to be determined. 15 million years ago the earth in this region began to shift, forming a series of plateaus. The Paunsaugunt is an extensive plateau, with the Paria River gradually eroding away the edge to form Bryce Canyon. The Park itself was established in 1924, & was named after an early settler in the area, Ebenezer Bryce. they emigrated from Scotland, married a local girl then moved southwards in stages, building sawmills as they went. In the mid 1870s they reached the Paria River, where they & his relatives settled for a number of years. It was at this time that Bryce made his immortal comment about Bryce Canyon – they called it “one hell of a place to lose a cow”. The area remained basically undiscovered by European tourists, the first guest houses only being constructed around the time when the park was officially established. Luckily this has led to Bryce Canyon being an area of largely unspoiled beauty, as well as the enormous scientific value of the historic information trapped in its pinnacles & spires. The canyon is by no means a stagnant place – the rim recedes by an average of about a foot every 50 years, & in this ever changing scene it is water that plays the most vital role in the shaping & eventual destruction of the magnificent scenery. Because the rock was laid down in layers, there is a variation in the hardness of the rock formed. When water runoff trickles across the rock, some areas erode rapidly whereas others hold firm. This variation in erosion speed causes the formation of pinnacles, or “hoodoos” of stable rock. In some places the water seeps down through cracks & eats out holes beneath the surface. When the side rock erodes away, an archway is left behind. Eventually the arch collapses, leaving one more pillars to join the rest. The ever changing vista of colours, spires, walls & archways is spectacular at any season, & the park is open all year round. Here you can wander through the Queen’s Garden, or gaze up at Queen Victoria herself surveying the ‘flowers’ in her garden. Some of the most awe inspiring lookouts are situated in this area, including Sunset Point & Inspiration Point – a must for any visitor. In the warmer months there’s lots of trails for the visitor to explore, ranging from easy strolls to hard hikes. Some of the best trails are located in the Bryce Amphitheatre, located near the entry to the park. Summer months can cause temperatures in the base of the canyon to soar, so it is very important to be prepared for the heat, & over lots of water. Walkers can also follow the Fairyland, Riggs Spring & Under-the-Rim trails, which are longer, but permit more opportunities to see the different elements of the park at close quarters. For the energetic, it is possible to cross-country ski in a number of areas in the park, & on some trails it is possible to go snowshoeing instead of hiking. In winter the roads are opened between snowfalls, allowing a different perspective of the park. Snow capped pinnacles stand out sharply against the background of white snow & dark green trees. The air is also cleaner, allowing visitors to see great distances. If you require a slightly different view of the park, it is possible to explore the park in a 1930 limousine. Alternatively, you can rent a horse on an hourly basis to trek some of the better trails. there is lots of interest to explore in the park, apart from the marvellous scenery of the ‘silent city’, as the hoodoos are sometimes called. The park also contains a large variety of plants & wildlife, including meadows & forests. Some bears & mountain lions also enter the park occasionally, but are seldom seen by tourists. Ground squirrels abound near the viewing areas, & their antics are to distract the visitor’s eyes from the scenery. On quiet mornings & evenings it is also possible to see deer, elk & antelope grazing on the meadows. Bryce Canyon is a hidden jewel, thoroughly deserving to be as widely known as its southern neighbour, the Grand Canyon. Include it on your itinerary, & you definitely won’t be disappointed. In fact, you may be completely overwhelmed by the fascinating & awe inspiring beauty of Bryce Canyon, like every other visitor.'
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.$nuxt.$loading.start()
      this.__main()
    })
  },
  methods: {
    __main() {
      this.$nuxt.$loading.finish()
    }
  }
}
</script>

<style lang="scss">
.v-item-post-s {
  @include fit2(margin-top, 20px);
  font-size: 0;
  .v-item-post {
    @include fit2(border-radius, 4px);
    background-color: $whiteColor;
  }
  .v-content {
    @include fit2(padding-left padding-right, 16px);
    @include fit2(padding-bottom, 14px);
    @include fit(14px);
    color: $blackColor;
    line-height: 1.3;
    white-space: normal;
  }
  .v-content-achievement {
    @include fit(13px);
    color: $blackColor;
    font-weight: bold;
    @include fit2(padding-top padding-bottom, 12px);
    @include fit2(padding-left padding-right, 20px);
  }
  .v-toolbox {
    height: 40px;
    padding: 0 20px;
    white-space: nowrap;
    vertical-align: top;
    .v-toolbox-item {
      display: inline-block;
      vertical-align: top;
      width: 25%;
      height: 100%;
      text-align: center;
      line-height: 40px;
      img {
        vertical-align: middle;
      }
    }
  }
}
</style>
