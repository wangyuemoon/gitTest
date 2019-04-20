// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/basic.css'
import './assets/scripts/base'
import {Radio} from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueAMap  from 'vue-amap'  //注意不要和 AMap原始名称覆盖

Vue.use(VueAMap)
// 初始化vue-amap
// VueAMap.initAMapApiLoader({
//   // 高德的key
//   key: 'you key',
//   // 插件集合
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geolocation'],
//   v: '1.4.4'
     
// });

Vue.config.productionTip = false
Vue.component(Radio.name, Radio)
// Vue.use(AMap)

VueAMap.initAMapApiLoader({
  key:'b7e597e159218b776fcede56f69411de',
  plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor']
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
