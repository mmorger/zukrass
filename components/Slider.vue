<template lang="pug">
  section#slider
    no-ssr
      flickity(ref="flickity" :options="flickityOptions")
        div.carousel-cell(v-for="v, index in videos" :key="index")
          div.video-wrapper
            .youtube-player(:data-id="v.vid" @click="vidClick($event)" :ref="v.vid")
          div.text-wrapper  
            div.emoji
              img.img-responsive(:src="'/images/' + v.emoji_url")
            h1.claim {{ v.claim }}
    div.logo
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
