<template lang="pug">
  no-ssr
    section#beratungsstellen
      div.inner
        h2 Beratungsstellen
        h3 Ruf uns an oder komm bei uns vorbei.
      div.collapse(v-for="bs, index in beratungsstellen" :key="index" :id="bs.id")  
        v-collapse-wrapper(:ref="bs.id" :active="true")
            .title(v-collapse-toggle)
              div.inner
                h3 {{ bs.title }}
                p.location {{ bs.location }}
                a(v-bind:href="'tel:' + bs.tel_url" class="tel") {{ bs.tel }}
            .content(v-collapse-content)
              div.inner
                a(v-bind:href="'http://' + bs.url" class="www" target="_blank") {{ bs.url }}
                ul
                  li(v-for="item in bs.description") {{ item }}
        div.toggle(:v-collapse-toggle="bs.id")      
</template>

<script>

export default {
  props: ["beratungsstellen"]
}
</script>
