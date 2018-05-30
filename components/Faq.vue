<template lang="pug">
  no-ssr
    section#faq
        div.inner
          h2 Antworten auf Deine Fragen
        v-collapse-wrapper(v-for="qa, index in faq" :key="index")
          h3.title(v-collapse-toggle) {{ qa.q }}
          .content(v-collapse-content) 
            ul
              li(v-for="item in qa.a") {{ item }}
</template>

<script>

export default {
  props: ["faq"]
}
</script>
