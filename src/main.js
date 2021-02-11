// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from 'vuex';
import mystore from './store';
import DefaultLayout from '~/layouts/Default.vue';
import VueLazyload from 'vue-lazyload';
import { ObserveVisibility } from 'vue-observe-visibility';
import VueNumber from 'vue-number-animation';
import Vuelidate from 'vuelidate';
import vueSmoothScroll from 'vue2-smooth-scroll';
import VueGtag from "vue-gtag";
import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar';

export default function (Vue, { router, head, isClient, appOptions }) {

  Vue.use(Vuex);

  appOptions.store = new Vuex.Store(mystore);

  Vue.component('Layout', DefaultLayout);

  Vue.use(Vuelidate);

  Vue.use(VueNumber);

  Vue.use(vueSmoothScroll, {
    offset: -118,
    updateHistory: false,
  })

  Vue.directive('observe-visibility', ObserveVisibility);

  Vue.use(VueLazyload, {
    preLoad: 3,
    loading: '/thumbnail.png',
    // filter: {
    //   webp(listener, options) {
    //     if (!options.supportWebp) { return; }
    //     else { listener.src += '.webp'; }
    //   },
    // },
    observer: true,
    observerOptions: {
      rootMargin: '1500px',
      threshold: 0.1
    },
    lazyComponent: true,
  });

  Vue.use(VueScrollProgressBar);

}
