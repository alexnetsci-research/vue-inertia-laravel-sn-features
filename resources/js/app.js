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

// Ziggy library with Vue
Vue.prototype.$route = route

createInertiaApp({
  resolve: name => import(`./Pages/${name}`),
  setup({ el, App, props }) {
    new Vue({
      vuetify,
      render: h => h(App, props),
    }).$mount(el)
  },
})