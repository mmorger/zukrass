<template lang="pug">
  section#beratungsstellen
    div.inner
      h2 Beratungsstellen
      h3 Ruf uns an oder komm bei uns vorbei.
    v-collapse-wrapper(v-for="bs, index in beratungsstellen" :key="index" :id="bs.id")
      .title(v-collapse-toggle)
        .inner
          h3 {{ bs.title }}
          p.location {{ bs.location }}
          a(v-bind:href="'tel:' + bs.tel_url" class="tel") {{ bs.tel }}
      .content(v-collapse-content)
        .inner
          a(v-bind:href="'http://' + bs.url" class="www" target="_blank") {{ bs.url }}
          ul
            li(v-for="item in bs.description") {{ item }}
        .toggle(v-collapse-toggle)

</template>

<script>

export default {
  props: ["beratungsstellen"]
}
</script>
