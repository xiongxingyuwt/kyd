import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$hdev = uni.getSystemInfoSync().statusBarHeight + 'px'

App.mpType = 'app'
Vue.prototype.$devhe = uni.getSystemInfoSync().statusBarHeight
const app = new Vue({
	...App
})
app.$mount()
