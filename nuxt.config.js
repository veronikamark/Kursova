export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#000000'}
      ],
      htmlAttrs: {
        lang: 'uk-UA'
      },
      link: [
        { rel: 'icon', href: '/favicon.ico' }
      ]
    }
  },
  meta: {
    name: 'Shift Lviv',
    author: 'GrassKnuckles'
  },
  modules: [
    ['nuxt-swiper', { async: true}]
  ],
  serverMiddleware: [
    '~/middleware/redirect.js'
  ],
  swiper: {
    // Swiper options
    //----------------------
    prefix: 'Swiper',
    styleLang: 'css',
    modules: ['autoplay', 'effect-cards'],
    lazy: {
      loadPrevNext: true, // pre-loads the next image to avoid showing a loading placeholder if possible
      loadPrevNextAmount: 2 //or, if you wish, preload the next 2 images
    }
  },
  nitro: {
    compressPublicAssets: true,
  },
  buildModules: ["nuxt-compress"],
  build: {
    transpile: ["@vuepic/vue-datepicker"],
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  }
})