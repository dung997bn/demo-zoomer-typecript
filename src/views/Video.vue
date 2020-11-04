<template>
  <video
    controls
    preload="none"
    poster="assets/logo.png"
    id="video"
    class="video"
    autoplay
  >
    <source
      src="https://player.vimeo.com/video/210741501?title=0&portrait=0&byline=0&autoplay=1"
    />
  </video>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Video",

  methods: {},
});
</script>

<style scoped >
.video {
  border-radius: 1px;
  width: 100%;
  height: auto;
}
</style>
