import Vue from 'vue'
import App from './App.vue'
import LRU from 'lru-cache'
import Vuetify from "vuetify";
import vueCountryRegionSelect from 'vue-country-region-select';
import store from './store/store';
import router from "./util/routes";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

const themeCache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60, // 1 hour
})

const vuetify = new Vuetify({
  lang: {
    current: "en"
  },
  theme: {
    options: {
      themeCache,
    }
  }
});

Vue.use(Vuetify, {vuetify, iconsGroup: "md" });

Vue.config.productionTip = false;
Vue.use(vueCountryRegionSelect);
Vue.use(VueAwesomeSwiper)

new Vue({
  name: 'BELY PTAH',
  el: '#app',
  store,
  router,
  vuetify,
  render: h => h(App),
  created() {
    store.dispatch('updatePageTitle', this.$options.name).then();
    store.dispatch('checkAuth').then();
  }
});
