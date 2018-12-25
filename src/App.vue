<template>
    <div id="app">
        <el-container>
            <CryptoHeader></CryptoHeader>
            <router-view></router-view>
            <el-footer style="background-color: #0C071C;height: auto;">
                <CryptoFooter></CryptoFooter>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    //import api from '@/util/api'
    import CryptoHeader from './components/layout/CryptoHeader'
    import CryptoFooter from './components/layout/CryptoFooter'
    import API from '@/api'
    import util from '@/util/util'

    export default {
        name: 'app',
        components: {
            CryptoHeader,
            CryptoFooter
        },
        mounted() {
            /*window.addEventListener('load', () => {
                if (typeof tronPay !== 'undefined') {
                    tronWeb = tronPay.tronWeb || tronWeb
                    if (tronWeb.isTronPay && tronWeb.ready) {
                        this.$store.commit('updateLogin', true)
                        let address = window.tronWeb.defaultAddress.hex;
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
            /*const waitForGlobal = async () => {
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
                        console.log('connected')
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
            };

            waitForGlobal().then()*/
            window.onload = () => {
                if (!window.tronWeb) {
                    this.$notify({
                        title: '提示',
                        message: '请先安装波场钱包插件',
                        duration: 0
                    });
                    this.$store.commit('updateLogin', false)
                } else {
                    console.log(window.tronWeb)
                    if (!window.tronWeb.ready) {
                        this.$notify({
                            title: '提示',
                            message: '波场钱包请先解锁',
                            duration: 0
                        });
                        this.$store.commit('updateLogin', false)
                    } else {
                        this.$store.commit('updateLogin', true)
                        let address = window.tronWeb.defaultAddress.hex;
                        API.login({
                            address: address
                        }).then(res => {
                            if (res.code === 0) {
                                util.setCookie('access_token', res.data.access_token);
                            }
                        });
                        window.tronWeb.trx.getAccount(address).then((res) => {
                            console.log(res);
                        })
                    }
                }
            }
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
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    html, body {
        padding: 0;
        margin: 0;
        background-color: $bgColor;
    }

    .fixed-width {
        max-width: $fixedWidth;
        padding: 20px;
        width: 100%;
        margin: 0 auto;

    }
</style>
