<template lang="pug">
.container
  Slider(:videos="videos" @vidClick="vidClick($event)")
  Intro
  Beratung(:beratungsstellen="beratungsstellen")
  Faq(:faq="faq")
  Videos(:videos="videos" @vidClick="vidClick($event)")
  div.footer.inner
    nuxt-link(to="impressum" class="about") Über die Kampagne

</template>

<script>
import Slider from "~/components/Slider.vue";
import Intro from "~/components/Intro.vue";
import Beratung from "~/components/Beratung.vue";
import Faq from "~/components/Faq.vue";
import Videos from "~/components/Videos.vue";

export default {
  data() {
    return {
      videos: [
        {vid: 'K-n2nVjIzv8', url: 'image.jpg', claim: 'Min Fründ und ich hends super... solang ich nüd falsch mache', emoji_url: 'emoji_beziehung.png'},
        {vid: '2YX9OH751qM', url: 'image.jpg', claim: 'Min Trainer betreut mich au no unter de Duschi', emoji_url: 'emoji_dusche.png'},
        {vid: 'gqKBhXK6mus', url: 'image.jpg', claim: 'Usgang isch mega cool... lernsch immer neui Lüt kenne', emoji_url: 'emoji_ausgang.png'},
        {vid: 'loOqgyTIdwo', url: 'image.jpg', claim: 'Min Vater macht mega villi im Huushalt... meischtens vill kaputt', emoji_url: 'emoji_familie.png'}

      ],
      beratungsstellen: [
        {title: 'Kokon', id:'kokon', location: 'Zürich', tel: '044 545 45 40', tel_url: '+41445454540', url: 'www.kokon-zh.ch', description: ['Kinder und Jugendliche', 'Körperliche, sexuelle oder psychische Gewalt', 'Gewalt zu Hause']},
        {title: 'OKey&KidsPunkt', id:'okeykids', location: 'Winterthur', tel: '052 245 04 04', tel_url: '+41522450404', url: 'www.okeywinterthur.ch', description: ['Kinder und Jugendliche', 'Körperliche, sexuelle oder psychische Gewalt', 'Gewalt zu Hause']},
        {title: 'Castagna', id:'castagna', location: 'Zürich', tel: '044 360 90 40', tel_url: '+41443609040', url: 'www.castagna-zh.ch', description: ['Kinder und Jugendliche', 'Frauen und Männer', 'Sexuelle Ausbeutung in der Kindheit und Jugend']},
        {title: 'Opferberatung Zürich', id:'obzh', location: 'Zürich', tel: '044 299 40 50', tel_url: '+41442994050', url: 'www.obzh.ch', description: ['Kinder und Jugendliche', 'Frauen und Männer', 'Körperliche, sexuelle oder psychische Gewalt', 'Strassenverkehrsopfer', 'Opfer von fürsorgerischen Zwangsmassnahmen und Fremdplatzierungen vor 1981']},
        {title: 'Kinderschutzgruppe und Opferberatungsstelle des Kinderspitals Zürich', id:'kinderschutzgruppe', location: 'Zürich', tel: '044 266 76 46', tel_url: '+41442667646', url: 'www.kinderschutzgruppe.ch', description: ['Kinder und Jugendliche', 'Körperliche, sexuelle oder psychische Gewalt']},
        {title: 'BIF Beratungsstelle für Frauen', id:'bif', location: 'Zürich', tel: '044 278 99 99', tel_url: '+41442789999', url: 'www.bif-frauenberatung.ch', description: ['Frauen', 'Körperliche oder psychische Gewalt in der Beziehung oder Ehe']},
        {title: 'Frauenberatung sexuelle Gewalt', id:'frauenberatung', location: 'Zürich', tel: '044 291 46 46', tel_url: '+41442914646', url: 'www.frauenberatung.ch', description: ['Frauen', 'Körperliche, sexuelle oder psychische Gewalt']},
        {title: 'Beratungsstelle Frauen-Nottelefon', id:'frauennottelefon', location: 'Winterthur', tel: '052 213 61 61', tel_url: '+41522136161', url: 'www.frauennottelefon.ch', description: ['Frauen', 'Körperliche, sexuelle oder psychische Gewalt']}
      ],
      faq: [
        {q:'Ist mein Problem wichtig genug, um bei einer Beratungsstelle anzurufen?', 
        a: [
        'Wenn Dich etwas beschäftigt, dann ist es wichtig!', 
        'Darüber reden hilft.', 
        'Du alleine entscheidest, was und wie viel Du uns erzählen möchtest.']},
        {q:'Was genau passiert, wenn ich bei einer Beratungsstelle anrufe?', 
        a: [
        'Wenn Du möchtest, können wir einen Termin abmachen und Du kannst für ein Gespräch vorbeikommen.', 
        'Wir hören Dir zu und helfen Dir, das Geschehene zu verarbeiten.',
        'Wir suchen mit Dir zusammen nach Lösungen.',
        'Wir klären Dich auch über Deine Rechte auf.',
        'Alles was Du uns erzählst ist vertraulich, wir stehen unter strenger Schweigepflicht.',
        'Du brauchst uns Deinen Namen nicht zu nennen. Dein Anruf ist anonym.']},
        {q:'Kostet es etwas, wenn ich mich bei euch melde?', 
        a: [
        'Nein, unsere Hilfe ist kostenlos.', 
        'Egal ob Du uns anrufst oder vorbeikommst. Es kostet Dich nichts.']},
        {q:'Erfährt jemand, was ich euch erzähle? Z. B. meine Eltern?', 
        a: [
        'Nein, alles was Du uns erzählst ist vertraulich!', 
        'Wir stehen unter strenger Schweigepflicht. Ohne Dein Wissen reden wir mit niemandem über das, was Du uns erzählst.', 
        'Mit Deinen Eltern nehmen wir nur Kontakt auf, wenn Du damit einverstanden bist.']},
        {q:'Muss ich eine Strafanzeige machen, um mich bei euch zu melden?', 
        a: [
        'Nein, Du musst keine Strafanzeige machen, um uns anzurufen.', 
        'Wir hören Dir zu und suchen mit Dir zusammen nach Lösungen.']},
        {q:'Kann ich auch für eine Freundin oder einen Freund anrufen?', 
        a: [
        'Ja, klar kannst Du das!', 
        'Du kannst Dich informieren und wir besprechen, wie Deiner Freundin oder Deinem Freund geholfen werden kann.',
        'Dieses Gespräch ist vertraulich und wir erzählen niemandem etwas darüber.']},
        {q:'Kann eine Freundin oder ein Freund für mich anrufen?', 
        a: [
        'Ja, wenn Du uns nicht selber anrufen willst, kann das eine Freundin oder ein Freund für Dich machen.', 
        'Wir werden mit ihr/ihm besprechen, wie sie/er Dir helfen kann.',
        'Wer uns anruft, muss seinen Namen nicht nennen, er/sie kann das anonym machen.']}
      ]
    }
  },
  components: {
    Intro,
    Slider,
    Beratung,
    Faq,
    Videos
  },
  computed: {
    vids() {
      return document.getElementsByClassName("youtube-player")
    }
  },
  methods: {
    vidClick(e) {
      let iframe = document.createElement("iframe")
      let embed = "https://www.youtube.com/embed/ID?autoplay=1&showinfo=0&controls=0&rel=0&ytp-pause-overlay=0"
      iframe.setAttribute("src", embed.replace("ID", e.dataset.id))
      iframe.setAttribute("frameborder", "0")
      iframe.setAttribute("allowfullscreen", "1")
      e.parentNode.parentNode.replaceChild(iframe, e.parentNode)
    },
    labnolThumb(id) {
      let thumb = '<img data-id="'+id+'" src="https://i.ytimg.com/vi/ID/hqdefault.jpg">'
      let play = '<div class="play" data-id="'+ id +'"></div>'
      return thumb.replace("ID", id) + play
    },
    getVids() {
      setTimeout(() => {
        for (let i = 0; i < this.vids.length; i++) {
          //console.log(this.vids[i]); //second console output
          const div = document.createElement("div")
          div.setAttribute("data-id", this.vids[i].dataset.id)
          div.innerHTML = this.labnolThumb(this.vids[i].dataset.id)
          this.vids[i].appendChild(div)
        }
      }, 1000);
    }
  },  
  mounted() {
    this.getVids()
  }
}
</script>

<style>
  .page-enter-active, .page-leave-active {
  transition: opacity 0.2s
}
.page-enter, .page-leave-active {
  opacity: 0
}
</style>
