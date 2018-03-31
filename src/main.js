// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import router from './router'
import VueFlex from "vue-flex"
import vlightbox from 'vlightbox'
import "vue-flex/dist/vue-flex.css"
import 'vuetify/dist/vuetify.min.css'




//require main sass
require('./assets/scss/main.scss')

Vue.use(VueFlex)
Vue.use(Vuetify)
Vue.use(vlightbox)
Vue.use(require('vue-panel'))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
    router,
  components: { App },
  template: '<App/>'
})
