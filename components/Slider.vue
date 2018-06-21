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
import MobileDetect from 'mobile-detect'

export default {
  props: ["videos"],

  data () {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true
      },
      isMobile: false
    }
  },
  methods: {
    vidClick(e) {
      this.$emit('vidClick', e.target)
    },
    
    pauseVideos() {
      this.videos.forEach((element) => {
        const vidContainer = this.$refs[element.vid][0]
        if(vidContainer.querySelector('iframe') !== null) {
          this.pauseOneVideo(vidContainer)
        }
      })
    },
    pauseOneVideo(element) {
      const iframe = element.querySelector( 'iframe')
      iframe.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
    }
  },
  mounted () {
    let md = new MobileDetect(window.navigator.userAgent)
    if(md.mobile()) {
      this.isMobile = true
    } else {
      this.$nextTick(() => {
        this.$refs.flickity.on( 'select',  () => {
          this.pauseVideos()
        }) 
      })
    }
  }
}

</script>
