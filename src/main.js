import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/element.js'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faHeart, faFilter, faBars, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {faHeart as farHeart, faCopy} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import config from '@/api/config'
import util from '@/util/util'
import API from '@/api'
import i18n from '@/i18n';
/*import { Notification } from 'element-ui';*/

library.add(faHeart, farHeart, faFilter, faBars, faUserCircle, faCopy)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.prototype.CONFIG = config;
Vue.prototype.util = util;
Vue.prototype.API = API;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');


/*window.onload = () => {
    if (!window.tronWeb) {
        Notification({
            type: 'info',
            title: '温馨提示',
            message: '请先安装波场钱包插件'
        });
    } else {
        if (!window.tronWeb.ready) {
            Notification({
                type: 'info',
                title: '温馨提示',
                message: '波场钱包请先解锁'
            });
        }
    }
}*/

