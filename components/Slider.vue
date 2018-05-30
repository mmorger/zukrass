<template lang="pug">
  section#slider
    no-ssr
      flickity(ref="flickity" :options="flickityOptions")
        div.carousel-cell(v-for="v, index in videos" :key="index")
          div.video-wrapper
            iframe(:src="'https://www.youtube.com/embed/' + v.vid + '?showinfo=0'" :frameborder='0' :allowfullscreen='1')

          //div.youtube-player(:data-id="v.vid")
          //img(:src="'images/' + sl.url" class="img-responsive")
          div.text-wrapper  
            h1.claim {{ v.claim }}
            div.emoji
            //div.logo
            //img(:src="'images/' + sl.emoji_url" class="emojicon")
            //img(:src="'images/logo.png'" class="logo")

</template>

<script>
export default {
  props: ["videos"],

  data () {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true

        // any options from Flickity can be used
      }
    }
  }
}

</script>
