export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SimpleWay - It услуги',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'keywords', content: 'Краснодар, видеонаблюдение, магазин, видеонаблюдения, камеры, видеорегистраторы, купить, системы, комплекты, монтаж, установка, Создание сайтов, продвижение сайтов, раскрутка сайтов, разработка сайтов, сайтов, сайт, создание сайтов Краснодар, заказать сайт в краснодаре, купить сайт, дизайн, логотипы, ip, ahd, hd sdi, аналоговые, wifi, беспроводные, уличные, внутренние, антивандальные' },
      { name: 'format-detection', content: 'telephone=no' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: [
      {
        hid: 'stripe', src: '//cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js', defer: true
      },
      {
        hid: 'stripe', src: '//kit.fontawesome.com/013bf0095d.js', defer: true
      },        

    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
   '@/assets/css/index.scss',
    ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins:[
    { src: "@/assets/js/aos", mode: "client" },
  ],
  purgeCSS: {
    whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
  ],
  styleResources: {
    scss: [
        '@/assets/css/index.scss',
    ]
},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop + window.innerHeight,
          behavior: 'smooth'
        })
      }
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  robots: [
    {
      UserAgent: 'Googlebot',
      Disallow: ['/user', '/admin'],
    },
    {
      UserAgent: '*',
      Disallow: '/admin',
    },
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-property-in-object', { loose: true }]],
    },
  }
}
