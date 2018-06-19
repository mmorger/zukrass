<template lang="pug">
  section#videos
    div.inner
      h2 Videos
      div.video-container(v-for="v, index in videos" :key="index")
        .youtube-player(:data-id="v.vid" @click="vidClick($event)" :ref="v.vid")
        h1 {{ v.claim }}
        .share
          a.button(v-bind:href="'https://www.youtube.com/watch?v=' + v.vid", class="button-share", target="blank")
              
</template>

<script>
export default {
  props: ["videos"],
  methods: {
    
    vidClick(e) {
      this.$emit('vidClick', e.target)
    }
    /*
    clipboardSuccessHandler ({ value, event }) {
      //console.log('success', value)
      alert("Link des Videos kopiert. Mit Einfügen kannst du den Link teilen.")
    },

    clipboardErrorHandler ({ value, event }) {
      //console.log('error', value)
      alert("Fehler. Der Link kann nicht geteilt werden.")
    }
    */
  }
}
</script>
