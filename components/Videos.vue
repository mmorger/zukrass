<template lang="pug">
  section#videos
    div.inner
      h2 Videos
      div.video-container(v-for="v, index in videos" :key="index")
        //youtube(:video-id="v.vid" :player-vars="{showinfo:0, controls:2, modestbranding:1}" )
        iframe(:src="'https://www.youtube.com/embed/' + v.vid + '?showinfo=0'" :frameborder='0')
        h1 {{ v.claim }}
        .share
          a(v-bind:href="''" class="button-share")



</template>

<script>
export default {
  props: ["videos"]
}
</script>
