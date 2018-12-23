import { Notification } from 'element-ui';


export default {
    checkEnv() {
        window.onload = function () {
            if (!window.tronWeb) {
                console.log(!window.tronWeb)
                Notification({
                    title: '提示',
                    message: '请先安装波场钱包插件',
                    duration: 0
                });
            } else {
                console.log(window.tronWeb)
            }
        }
    }
}

/*
// 环境检查
const waitForGlobal = async () => {
  if (window.tronWeb) {
    const tronWeb = window.tronWeb
    const nodes = await tronWeb.isConnected()
    const connected = !Object.entries(nodes).map(([key, value]) => {
      if (!value) {
        console.error(`Error: ${key} is not connected`)
      }
      return value
    }).includes(false)
    if (connected) {
      app.$mount('#app')
    } else {
      console.error('Error: TRON node is not connected')
      console.error('wait for tronLink')
      setTimeout(async () => {
        await waitForGlobal()
      }, 100)
    }
  } else {
    console.error('wait for tronLink')
    setTimeout(async () => {
      await waitForGlobal()
    }, 100)
  }
}

waitForGlobal().then()*/

