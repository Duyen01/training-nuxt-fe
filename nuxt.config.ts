import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  devtools: { enabled: true },
  css: [  
    '~/assets/css/tailwind.css'  
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "Manage Employee Nuxt 3 Application",
      meta: [
        { charset: 'utf-8'},
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'desription', name: 'description', content: 'Manage User Nuxt 3 Application Desc'},
        { name: 'format-detection', content: 'telephone=no'},
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        // {
        //   rel: 'stylesheet',
        //   href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
        // },
        
        {
          rel: 'stylesheet',
          href: 'https://cdn.tailwindcss.com'
        },
      ],
      script: [
        // {
        //   src:  'https://code.jquery.com/jquery-3.7.1.min.js',
        //   type: 'text/javascript',
        // },
        // {
        //   src:  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
        //   type: 'text/javascript',
        // },        
        {
          src:  'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js',
          type: 'text/javascript',
        },        
        {
          src:  'https://unpkg.com/axios/dist/axios.min.js',
          type: 'text/javascript',
        },        
        {
          src:  'https://cdn.tailwindcss.com',
          type: 'text/javascript',
        },
      ],
    }
  }
})