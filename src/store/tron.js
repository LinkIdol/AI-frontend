import getWeb3 from '../util/getWeb3'

const tron = {
    state: {
        tron: {
            isInjected: false,
            tronWebInstance: null,
            coinbase: null,
            balance: null
        },
        isLoginIn: false
    },
    mutations: {
        registerTronWebInstance (state, payload) {
            console.log('registerTronWebinstance Mutation being executed', payload)
            let result = payload
            let copy = state.tronWeb
            copy.coinbase = result.coinbase
            copy.balance = parseInt(result.balance, 10)
            copy.isInjected = result.injectedTronWeb
            copy.tronWebInstance = result.tronWeb
            state.tron = copy
        },
        updateLogin(state, data) {
            state.isLoginIn = data;
        },
        updateState(state, data) {
            state = {...state, data}
        },
        pollTronWebInstance (state, payload) {
            console.log('pollTronWebInstance mutation being executed', payload)
            state.tron.coinbase = payload.coinbase
            state.tron.balance = parseInt(payload.balance, 10)
        },
    },
    actions: {
        registerWeb3 ({commit}) {
            console.log('registerTronWeb Action being executed')
            getWeb3.then(result => {
                console.log('committing result to registerTronWebInstance mutation')
                commit('registerTronWebInstance', result)
            }).catch(e => {
                console.log('error in action registerTronWeb', e)
            })
        },
        pollTronWeb ({commit}, payload) {
            console.log('pollTronWeb action being executed')
            commit('pollTronWebInstance', payload)
        },
    },
    getters: {

    }
}
export default tron