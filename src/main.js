// Import main css
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '~/assets/style/main.scss'


// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  
  // Link 
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400&family=Roboto:wght@400;500&display=swap'
  })
  Vue.use(BootstrapVue)
  Vue.use(BootstrapVueIcons)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}