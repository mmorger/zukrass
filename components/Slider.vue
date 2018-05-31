<template lang="pug">
  section#slider
    no-ssr
      flickity(ref="flickity" :options="flickityOptions")
        div.carousel-cell(v-for="v, index in videos" :key="index")
          div.video-wrapper
            .youtube-player(:data-id="v.vid" @click="vidClick($event)" :ref="v.vid")
          //div.youtube-player(:data-id="v.vid")
          //img(:src="'images/' + sl.url" class="img-responsive")
          div.text-wrapper  
            div.emoji
            h1.claim {{ v.claim }}
            //div.logo
            //img(:src="'images/' + sl.emoji_url" class="emojicon")
            //img(:src="'images/logo.png'" class="logo")
    a(v-bind:href="'/'" class="logo") #[span zu krass!]
</template>

<script>
export default {
  props: ["videos"],

  data () {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true
      }
    }
  },
  methods: {
    vidClick(e) {
      this.$emit('vidClick', e.target)
    }
  }
}

</script>
