window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'

import { InertiaProgress } from '@inertiajs/progress'
InertiaProgress.init({
  delay: 250,
  color: '#29d',
  includeCSS: true,
  showSpinner: false,
})

import vuetify from './plugins/vuetify'

//Vuex
import Vuex from 'vuex'
import storeData from "./store/index"
Vue.use(Vuex)
const store = new Vuex.Store(storeData);

// Ziggy library with Vue
Vue.prototype.$route = route

// Inertia Link
import { Link } from '@inertiajs/inertia-vue'
Vue.component('inertia-link', Link)

// Layouts
Vue.component('layout-app', require('./layouts/App.vue').default);
Vue.component('layout-my-profile', require('./layouts/MyProfile.vue').default);
Vue.component('layout-user-profile', require('./layouts/UserProfile.vue').default);
Vue.component('layout-auth', require('./layouts/Auth.vue').default);
Vue.component('sidebar-app', require('./layouts/AppSidebar.vue').default);
Vue.component('flash-messages', require('./layouts/FlashMessages.vue').default);

// Components
Vue.component('breadcrumbs', require('./components/Breadcrumbs.vue').default);

createInertiaApp({
  resolve: name => import(`./Pages/${name}`),
  setup({ el, App, props }) {
    new Vue({
      vuetify,
      store,
      render: h => h(App, props),
    }).$mount(el)
  },
})