<template lang="pug">
  no-ssr
    section#faq
        div.inner
          h2 Antworten auf Deine Fragen
        v-collapse-wrapper(v-for="qa, index in faq" :key="index" v-on:afterClose="handleBoxClose(index)" v-on:afterOpen="handleBoxOpen(index)" :class="{ active: openBox === index}")
          h3.title(v-collapse-toggle) {{ qa.q }}
          .content(v-collapse-content) 
            ul
              li(v-for="item in qa.a" v-html="item")
</template>

<script>

export default {
  props: ["faq"],
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
