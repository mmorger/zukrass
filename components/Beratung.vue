<template lang="pug">
  no-ssr
    section#beratungsstellen
      div.inner
        h2 Beratungsstellen
        h3 Ruf uns an oder komm bei uns vorbei.
      div.collapse-wrapper
        v-collapse-wrapper(v-for="bs, index in beratungsstellen" :key="index" :id="bs.id" :ref="bs.id" v-on:afterClose="handleBoxClose(index)" v-on:afterOpen="handleBoxOpen(index)" :class="{ active: openBox === index}")
          .title(v-collapse-toggle)
            div.inner
              h3 {{ bs.title }}
              p.location {{ bs.location }}
              a(v-bind:href="'tel:' + bs.tel_url" class="tel") {{ bs.tel }}
            div.toggle 
          .content(v-collapse-content)
            div.inner
              a(v-bind:href="'http://' + bs.url" class="www" target="_blank") {{ bs.url }}
              ul
                li(v-for="item in bs.description") {{ item }}
</template>

<script>

export default {
  props: ["beratungsstellen"],
  data () {
    return {
      openBox: null
    }
  },
  methods: {
    handleBoxOpen(index) {
      this.$nextTick(() => {
        this.openBox = index
      })
    },
    handleBoxClose(index) {
      this.openBox = null
    }
  }
}
</script>
