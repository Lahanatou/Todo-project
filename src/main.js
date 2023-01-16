import Vue from 'vue'
import App from './App.vue'
// routerをimport
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  // router: routerの省略形
  router,
  render: h => h(App)
}).$mount('#app')
