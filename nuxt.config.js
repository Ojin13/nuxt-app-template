export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

    // For external resources (scripts, css..)
    script: [
      {
        //src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      }
    ],
    link: [
      {
        //rel: 'stylesheet',
        //href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/sass/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@plugins/test.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://firebase.nuxtjs.org/guide/getting-started
    // [
    //   '@nuxtjs/firebase',
    //   {
    //     config: {
    //       apiKey: "",
    //       authDomain: "",
    //       projectId: "",
    //       storageBucket: "",
    //       messagingSenderId: "",
    //       appId: "",
    //       measurementId: ""
    //     },
    //     services: {
    //       auth: true,
    //       functions: true
    //     }
    //   }
    // ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    
    headers: {
      common: {
        'Cache-Control': 'no-cache'
      },
    }
    
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // This section, could be empty, but there was a problem with babel and core-js so this section is needed
  build: {
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  },

  router: {
    middleware: ['getDeviceType']
  },

  loading: true,
  loading: {
    color: 'red',
    height: '5px'
  }
}