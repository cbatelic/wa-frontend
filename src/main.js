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
