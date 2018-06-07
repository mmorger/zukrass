<template lang="pug">
#impressum
  .container
    div.inner
      h2 Über die Kampagne
      nuxt-link(to="/" class="logo")
      h3 Impressum
      ul
        li Kanton Zürich, Direktion der Justiz und des Innern
        li Kantonale Opferhilfestelle
        li 
          a(href='mailto:kantonale.opferhilfestelle@ji.zh.ch') kantonale.opferhilfestelle@ji.zh.ch
        li 
          a(href='http://www.opferhilfe.zh.ch') www.opferhilfe.zh.ch       
        
      .div.footer.inner
        nuxt-link(to="/" class="back") Zurück
</template>

<script>

export default {
  components: {
  }
}
</script>
