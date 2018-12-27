let getTronWeb = new Promise(function (resolve, reject) {
    let tronWeb = window.tronWeb;
    if (typeof tronWeb !== 'undefined') {
        resolve({
            injectedTronWeb: tronWeb.ready,
            tronWeb
        })
    } else {
        reject(new Error('Unable to connect to TronPay'))
    }
})
    .then(result => {
        return new Promise(function (resolve) {
            // Retrieve coinbase
            let coinbase = result.tronWeb.defaultAddress.base58;
            result = Object.assign({}, result, { coinbase })
            resolve(result)
        })
    })
    .then(result => {
        return new Promise(function (resolve,) {
            // Retrieve balance for coinbase
            result.tronWeb.trx.getBalance(result.coinbase).then((balance) => {
                result = Object.assign({}, result, { balance })
                resolve(result)
            })
        })
    })

export default getTronWeb
