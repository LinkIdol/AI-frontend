import abi from './json/casinoContract.json'

let getContract = new Promise(function (resolve, reject) {
    let web3 = window.web3;
    let casinoContract = web3.eth.contract(abi.abi)
    let casinoContractInstance = casinoContract.at(abi.address)
    console.log(casinoContract)
    console.log(casinoContractInstance)
    resolve(casinoContractInstance)
})

export default getContract
