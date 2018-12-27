import SaleClockAuction from './json/SaleClockAuction.json'

let getContract = new Promise(function (resolve, reject) {
    let web3 = window.web3;
    let casinoContract = web3.eth.contract(SaleClockAuction.abi)
    let casinoContractInstance = casinoContract.at(SaleClockAuction.address)
    console.log(casinoContract)
    console.log(casinoContractInstance)
    resolve(casinoContractInstance)
})

export default getContract
