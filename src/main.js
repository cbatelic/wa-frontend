import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  colors: {
    primary:'#1286C7',
    success:'rgb(23, 201, 100)',
    danger:'rgb(242, 19, 93)',
    warning:'rgb(255, 130, 0)',
    dark:'rgb(36, 33, 69)'
  }
}),


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueSidebarMenu)

Vue.use(Vuetify)
export default new Vuetify({ })

Vue.config.productionTip = false

new Vue({
  router,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
