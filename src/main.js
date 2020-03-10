// Import main css
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '~/assets/style/main.scss'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  
  // Link 
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400&family=Roboto:wght@400;500;700&display=swap'
  })
  head.meta.push(
    {
      property: 'og:locale',
      content: 'en_US'
    },
    {
      property: 'og:url',
      content: 'https://yanuaraditia.com'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  )
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)
}