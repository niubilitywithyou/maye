// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Less from 'less'
import LyTab from 'ly-tab';
import store from './store'
//import Mint from 'mint-ui'
import "mint-ui/lib/style.css"
//引入rem.js
import Rem from './config/rem.js'
import"../static/iconfont/iconfont.css"
Vue.config.productionTip = false
//Vue.use(Mint);
//创建eventBus
//window.eventBus = new Vue()
/* eslint-disable no-new */
Vue.use(Less)
Vue.use(LyTab);
new Vue({
  el: '#app',
  router,
  store,//全局注册
  components: { App },
  template: '<App/>'
})
