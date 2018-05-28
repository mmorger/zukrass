<template lang="pug">
div.container
  Slider(:videos="videos")
  Intro
  Beratung(:beratungsstellen="beratungsstellen")
  Faq(:faq="faq")
  Videos(:videos="videos")
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
      slides: [
        {url: 'image.jpg', claim: 'Betreut dich dein Trainer auch unter der Dusche?', emoji_url: 'emoji-1.png'},
        {url: 'image.jpg', claim: 'Achtung, Seife', emoji_url: 'emoji-1.png'}
      ],
      videos: [
        {vid: 'Ihk66LtCLvc', url: 'image.jpg', claim: 'Min Fründ und ich hends supi... solang ich nüd falsch mache', emoji_url: 'emoji-1.png'},
        {vid: 'Dnqc-nzrpqI', url: 'image.jpg', claim: 'Min Trainer betreut mich au unter de Duschi', emoji_url: 'emoji-1.png'},
        {vid: 'Ihk66LtCLvc', url: 'image.jpg', claim: 'Usgang isch mega cool... lernsch immer neui Lüt kenne', emoji_url: 'emoji-1.png'},
        {vid: 'Dnqc-nzrpqI', url: 'image.jpg', claim: 'Min Vater macht mega villi im huushalt... meischtens vill kabutt', emoji_url: 'emoji-1.png'}

      ],
      beratungsstellen: [
        {title: 'Kokon', id:'kokon', location: 'Zürich', tel: '044 545 45 40', url: 'www.kokon-zh.ch', description: ['Kinder und Jugendliche', 'Körperliche, sexuelle oder psychische Gewalt', 'Gewalt zu Hause']},
        {title: 'OKey&KidsPunkt', id:'okeykids', location: 'Winterthur', tel: '052 245 04 04', url: 'www.okeywinterthur.ch', description: ['Kinder und Jugendliche', 'Körperliche, sexuelle oder psychische Gewalt', 'Gewalt zu Hause']},
        {title: 'Castagna', id:'castagna', location: 'Zürich', tel: '044 360 90 40', url: 'www.castagna-zh.ch', description: ['Kinder und Jugendliche', 'Frauen und Männer', 'Sexuelle Ausbeutung in der Kindheit und Jugend']},
        {title: 'Opferberatung Zürich', id:'obzh', location: 'Zürich', tel: '044 299 40 50', url: 'www.obzh.ch', description: ['Kinder und Jugendliche', 'Frauen und Männer', 'Körperliche, sexuelle oder psychische Gewalt', 'Strassenverkehrsopfer', 'Opfer von fürsorgerischen Zwangsmassnahmen und Fremdplatzierungen vor 1981']},
        {title: 'Kinderschutzgruppe und Opferberatungsstelle des Kinderspitals Zürich', id:'kinderschutzgruppe', location: 'Zürich', tel: '044 266 76 46', url: 'www.kinderschutzgruppe.ch', description: ['Kinder und Jugendliche', 'Körperliche, sexuelle oder psychische Gewalt']},
        {title: 'BIF Beratungsstelle für Frauen', id:'bif', location: 'Zürich', tel: '044 278 99 99', url: 'www.bif-frauenberatung.ch', description: ['Frauen', 'Körperliche oder psychische Gewalt in der Beziehung oder Ehe']},
        {title: 'Frauenberatung sexuelle Gewalt', id:'frauenberatung', location: 'Zürich', tel: '044 291 46 46', url: 'www.frauenberatung.ch', description: ['Frauen', 'Körperliche, sexuelle oder psychische Gewalt']},
        {title: 'Beratungsstelle Frauen-Nottelefon', id:'frauennottelefon', location: 'Winterthur', tel: '052 213 61 61', url: 'www.frauennottelefon.ch', description: ['Frauen', 'Körperliche, sexuelle oder psychische Gewalt']}
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
  }
};
</script>

<style>
  .page-enter-active, .page-leave-active {
  transition: opacity 0.2s
}
.page-enter, .page-leave-active {
  opacity: 0
}
</style>
