import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faHeart, faFilter, faBars} from '@fortawesome/free-solid-svg-icons'
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import config from '@/api/config'
import utils from '@/util/util.js'

library.add(faHeart, farHeart, faFilter, faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.prototype.CONFIG = config;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
utils.checkEnv();


