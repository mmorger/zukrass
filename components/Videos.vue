<template lang="pug">
  section#videos
    div.inner
      h2 Videos
      div.video-container(v-for="v, index in videos" :key="index")
        .youtube-player(:data-id="v.vid" @click="vidClick($event)" :ref="v.vid")
        h1 {{ v.claim }}
        
</template>

<script>
export default {
  props: ["videos"],
  methods: {
    vidClick(e) {
      this.$emit('vidClick', e.target)
    }
  }
}
</script>
