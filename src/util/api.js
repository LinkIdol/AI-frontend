import abi from './abi.json'


const api = {
  tronWeb: false,
  contract: false,

  setTronWeb(tronWeb) {
    this.tronWeb = tronWeb;
    this.contract = tronWeb.contract(abi.abi, abi.address)
  },
}

export default api