import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$hdev = uni.getSystemInfoSync().statusBarHeight

App.mpType = 'app'
Vue.prototype.$devhe = uni.getSystemInfoSync().statusBarHeight
Vue.prototype.$screenHeight = uni.getSystemInfoSync().screenHeight;
const app = new Vue({
	...App
})
app.$mount()
