import {Notification} from 'element-ui';

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
                if (!window.tronWeb.ready) {
                    Notification({
                        title: '提示',
                        message: '波场钱包请先登录',
                        duration: 0
                    });
                }
            }
        }
    },
    strToHex(str) {
        if (str === "")
            return "";
        var hexCharCode = [];
        hexCharCode.push("0x");
        for (var i = 0; i < str.length; i++) {
            hexCharCode.push((str.charCodeAt(i)).toString(16));
        }
        return hexCharCode.join("");
    },
    async signMessage(message) {
        const privateKey = 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0';
        let hexStr = this.strToHex(message);
        let sign = await window.tronWeb.trx.signMessage(hexStr, privateKey);
        return sign;
    },
    setCookie(name,value)
    {
        let Days = 30;
        let exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    },
    getCookie(name){
        let cookieName = encodeURIComponent(name)+"=",
            cookieStart=document.cookie.indexOf(cookieName),
            cookieValue=null;
        if(cookieStart>-1){
            let cookieEnd=document.cookie.indexOf(";",cookieStart);
            if(cookieEnd === -1){
                cookieEnd=document.cookie.length;
            }
            cookieValue=decodeURIComponent(document.cookie.substring(cookieStart+document.cookie.length,cookieEnd));
        }
        return cookieValue;
    },
    delCookie(name)
    {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval = this.getCookie(name);
        if(cval!=null) {
            document.cookie= name + "="+cval+";expires="+exp.toGMTString();
        }
    },
    formatDateTime(dateTime, fmt) {
        let o = {
            "M+": dateTime.getMonth() + 1, //月份
            "d+": dateTime.getDate(), //日
            "h+": dateTime.getHours(), //小时
            "m+": dateTime.getMinutes(), //分
            "s+": dateTime.getSeconds(), //秒
            "q+": Math.floor((dateTime.getMonth() + 3) / 3), //季度
            "S": dateTime.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (dateTime.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

}

/*window.addEventListener('load', () => {
    if (typeof tronPay !== 'undefined') {
        tronWeb = tronPay.tronWeb || tronWeb
        if (tronWeb.isTronPay && tronWeb.ready) {
            this.$store.commit('updateLogin', true)
            let address = window.tronWeb.defaultAddress.base58;
            API.login({
                address: address,
                sign: ''
            }).then(res => {
                console.log(res);
            });
            /!*window.tronWeb.trx.getAccount(address).then((res) => {
                console.log(res);
            })*!/
        } else {
            this.$notify({
                title: '提示',
                message: '波场钱包请先解锁',
                duration: 0
            });
            this.$store.commit('updateLogin', false)
        }
    } else {
        this.$notify({
            title: '提示',
            message: '请先安装波场钱包插件',
            duration: 0
        });
        this.$store.commit('updateLogin', false)
    }
})*/

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

/*api.setTronWeb(window.tronWeb)

api.contract.allOf(1).call().then(resp => {
  console.log(resp)
})

api.contract.ownerOf(1).call().then(resp => {
  console.log(resp)
})

api.contract.tokenExists(1).call().then(resp => {
  console.log(resp)
})*/

