<template>
  <div class="container">
    <video-player
      ref="videoPlayer"
      class="video-player vjs-custom-skin"
      :playsinline="true"
      :options="playerOptions"
    ></video-player>
  </div>
</template>
<script>
export default {
  data() {
    return {
      playerOptions: {
        // 播放速度
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        // 如果true,浏览器准备好时开始回放。
        autoplay: false,
        // 默认情况下将会消除任何音频。
        muted: false,
        // 导致视频一结束就重新开始。
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持)
        preload: 'auto',
        language: 'zh-CN',
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: '1:1',
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true,
        sources: [
          {
            type: '',
            // url地址
            src:
              'https://d26c8a57j0sew6.cloudfront.net/posts/153302989659930_959_ios.mp4'
          }
        ],
        // 你的封面地址
        poster:
          'http://images-omv.s3-website-us-west-2.amazonaws.com/videothumbnail/posts/153302989659930_959_ios.jpg',
        // width: document.documentElement.clientWidth,
        // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          // 全屏按钮
          fullscreenToggle: true
        }
      }
    }
  }
}
</script>
<style>
body {
  width: 100%;
  height: 2000px;
  overflow: scroll;
}
.vjs-big-play-button {
  width: 2em !important;
  background-color: black !important;
  border-radius: 50% !important;
  opacity: 0.5 !important;
  left: 50% !important;
  top: 50% !important;
  font-size: 3em !important;
  line-height: 1.8em !important;
  margin-left: -1em !important;
}
.vjs-big-play-button:hover {
  width: 2em !important;
  border-radius: 50% !important;
  overflow: hidden;
  font-size: 3em;
  line-height: 1.8em !important;
  background-color: black !important;
  left: 50% !important;
  top: 50% !important;
  margin-left: -1em !important;
}
</style>
