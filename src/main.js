import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faHeart, faFilter, faBars, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import config from '@/api/config'
import i18n from '@/i18n';

library.add(faHeart, farHeart, faFilter, faBars, faUserCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.prototype.CONFIG = config;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');


