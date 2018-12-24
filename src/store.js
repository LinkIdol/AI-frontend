import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoginIn: false
    },
    mutations: {
        updateLogin(state, data) {
            state.isLoginIn = data;
        },
        updateState(state, data) {
            state = {
                ...state,
                data
            }
        }
    },
    actions: {}
})
