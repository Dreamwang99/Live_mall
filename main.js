import Vue from 'vue'
import App from './App'
import api from "./api/index"
import vConsole from '@/common/vconsole/dist/vconsole.min.js'

Vue.config.productionTip = false

App.mpType = 'app'

const vConsoles = new vConsole()
Vue.prototype.baseUrl ="http://zhibo.a2w0m.cn/api/public/?service="
Vue.prototype.request = api


const app = new Vue({
    ...App
})
app.$mount()
