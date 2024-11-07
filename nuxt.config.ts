// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    css: "/<rootDir>/assets/css",
  }, 
  css: ["@/assets/css/main.css"],
  
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR', 
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'Serviços de montagem e manutenção de elevadores, climatização e automação industrial.' },
        { name: 'keywords', content: 'manutenção, elevadores, climatização, automação industrial' },
        { property: 'og:title', content: 'START2 ENGENHARIA' },
        { property: 'og:description', content: 'Especialistas em montagem e manutenção de sistemas industriais.' },
        { property: 'og:image', content: '~/assets/imgs/logo.webp' },
        { name: 'author', content: 'START2 ENGENHARIA' }       
      ],
      title: 'START2 ENGENHARIA',
      script: [
        {
          src: 'https://cdn.tailwindcss.com', 
          defer: false
        }
      ]
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  
})
