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
      meta: [
        { charset: 'utf-8' },       
      ],
      title: 'Start2',
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
