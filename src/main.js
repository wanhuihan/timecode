import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import 'vue-good-table/dist/vue-good-table.css'
Vue.config.productionTip = false
// import VueGoodTablePlugin from 'vue-good-table';
// Vue.use(VueGoodTablePlugin);
Vue.prototype.axios = axios;
new Vue({
  render: h => h(App),
}).$mount('#app')
