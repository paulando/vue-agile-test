// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import VueAgile from 'vue-agile'

export default function (Vue, { router, head, isClient, appOptions }) {

  Vue.component('Layout', DefaultLayout);

  Vue.use(VueAgile);

}
