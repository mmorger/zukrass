module.exports = {
  /*
  ** Headers of the page
  */
 head: {
   title: 'zukrass',
   meta: [
     { charset: 'utf-8' },
     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
     { hid: 'description', name: 'description', content: 'Viele Jugendliche erleben körperliche, sexuelle oder psychische Gewalt. Die Kampagne «zukrass.ch» der Kantonalen Opferhilfestelle Zürich zeigt Opfern von Gewalt, wo sie kostenlose, vertrauliche und anonyme Hilfe finden.' },
     { name: 'og:description', property: 'og:description', content: 'Viele Jugendliche erleben körperliche, sexuelle oder psychische Gewalt. Die Kampagne «zukrass.ch» der Kantonalen Opferhilfestelle Zürich zeigt Opfern von Gewalt, wo sie kostenlose, vertrauliche und anonyme Hilfe finden.' },
     { name: 'og:image', property: 'og:image', content: 'https://www.zukrass.ch/images/thumb_zukrass.png' },
     { name: 'twitter:card', content: "summary" },
     { name: 'twitter:site', content: "@zukrassC" },
     { name: 'twitter:title', content: "#zukrass" },
     { name: 'twitter:description', content: "Zukrass.ch ist eine Kampagne der Kantonalen Opferhilfestelle des Kantons Zürich" },
     { name: 'msapplication-TileColor', content: '#ffffff' },
     { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
     { name: 'theme-color', content: '#ffffff' }
    ],
    script: [
      { src: 'https://cdn.polyfill.io/v2/polyfill.js?features=String.prototype.includes,Array.prototype.find,Object.assign,Promise' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    '@/assets/css/styles.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~/plugins/collapse', ssr: false },
    { src: '~/plugins/flickity', ssr: false },
    { src: '~/plugins/ga.js', ssr: false }
  ]
}
