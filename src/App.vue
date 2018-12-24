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

    export default {
        name: 'app',
        components: {
            CryptoHeader,
            CryptoFooter
        },
        mounted() {
            /*window.onload = () => {
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
                            address: address,
                            sign: ''
                        }).then(res => {
                            console.log(res);
                        });
                        window.tronWeb.trx.getAccount(address).then((res) => {
                            console.log(res);
                        })
                    }
                }
            }*/
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
