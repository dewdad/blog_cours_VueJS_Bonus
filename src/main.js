import Vue from 'vue'
import VueMoment from 'vue-moment'
import './plugins/vuetify'
import router from './router'
import store from './store'

import App from './App'

import moment from 'moment'
import 'moment/locale/fr'

// css
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import VueSlimScroll from 'vue-slimscroll'
import VueLodash from 'vue-lodash'

Vue.use(VueLodash)
Vue.use(VueSlimScroll)

Vue.use(VueMoment, {
  moment
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
